require 'sinatra'
require 'honeybadger' if ENV['HONEYBADGER_API_KEY']
require 'uri'
require 'redcarpet'
require 'dry/inflector'

module Voom
  module Presenters
    module WebClient
      class App < Sinatra::Base
        include Trace
        set :root, File.expand_path('../../../../..', __FILE__)
        set :router_, WebClient::Router
        set :bind, '0.0.0.0'
        set :views, Proc.new {File.join(root, "views", ENV['VIEW_ENGINE'] || 'mdc')}
        set :dump_errors, false
        set :protection, :except => :frame_options
        configure do
          enable :logging
        end
        helpers Helpers::FormHelpers
        helpers Helpers::PaddingHelpers
        helpers Helpers::ExpandHash
        helpers do
          def render_component(scope, comp, components, index)
            ComponentRenderer.new(comp, render: method(:render), scope: scope, components: components, index: index).render
          end

          def markdown(text)
            unless @markdown
              renderer = CustomRender.new(hard_wrap: false, filter_html: true)
              options = {
                  autolink: false,
                  no_intra_emphasis: true,
                  fenced_code_blocks: true,
                  lax_html_blocks: true,
                  strikethrough: true,
                  superscript: true,
                  disable_indented_code_blocks: true
              }
              @markdown = Redcarpet::Markdown.new(renderer, options)
            end

            @markdown.render(text)
          end

          def inflector
            @inflector ||= Dry::Inflector.new
          end

          def eq(attrib, value)
            attrib.to_s == value.to_s
          end

          def h(text)
            Rack::Utils.escape_html(text)
          end

          def include?(array, value)
            array.map(&:to_s).include?(value.to_s)
          end

          def includes_one?(array1, array2)
            (array2.map(&:to_sym)-array1.map(&:to_sym)).size != array2.size
          end

          def unique_id(comp)
            "#{comp.id}-#{SecureRandom.hex(4)}"
          end

          def expand_text(text, markdown: true)
            if markdown
              self.markdown(Array(text).join("\n\n")) #.gsub("\n\n", "<br/>")
            else
              Array(text).join('<br/>')
            end
          end

          def color_classname(comp, affects = nil, color_attr = :color)
            color = comp&.public_send(color_attr)
            return unless color

            return "v-#{comp.type}__primary" if eq(color, :primary)
            return "v-#{comp.type}__secondary" if eq(color, :secondary)

            "v-#{affects}color__#{color}"
          end

          def color_style(comp, affects = nil, color_attr = :color)
            color = comp.public_send(color_attr)
            "#{affects}color: #{color};" unless %w(primary secondary).include?(color.to_s) || color.nil?
          end

          def snake_to_camel(hash, except: [])
            Hash[hash.map {|k, v|
              next [k, v] if except.include?(k)
              new_key = k.to_s.split('_').collect(&:capitalize).join
              new_key[0] = new_key[0].downcase
              [new_key, v]}
            ]
          end

          def to_hash(ostruct_or_hash)
            {}.tap do |h|
              ostruct_or_hash.to_h.each {|key, value| h[key.to_sym] = transform(value)}
            end
          end

          def transform(thing)
            case thing
            when OpenStruct
              to_hash(thing)
            when Array
              thing.map {|v| transform(v)}
            else
              thing
            end
          end

          def plugin_headers(pom)
            PluginHeaders.new(pom: pom, render: method(:render)).render
          end

          def custom_css(path, host=nil)
            CustomCss.new(path, root: Presenters::Settings.config.presenters.root, host: host).render
          end

          def custom_js
            custom_js_path = Presenters::Settings.config.presenters.web_client.custom_js
            Dir.glob(custom_js_path).map do |file|
              _build_script_tag_(file)
            end.join("\n") if custom_js_path
          end

          def _build_script_tag_(path)
            (<<~JS)
            <script defer src="#{env['SCRIPT_NAME']}#{path.sub('public/','')}"></script>
            JS
          end
        end


        get '/' do
          pass unless Presenters::App.registered?('index')
          presenter = Presenters::App['index'].call
          render_presenter(presenter)
        end

        get '/:_presenter_' do
          fq_presenter = [params[:_presenter_], 'index'].join(':')
          pass unless Presenters::App.registered?(params[:_presenter_]) || Presenters::App.registered?(fq_presenter)
          presenter = (Presenters::App.registered?(fq_presenter) ? Presenters::App[fq_presenter] :
                           Presenters::App[params[:_presenter_]]).call
          render_presenter(presenter)
        end

        get '/:_namespace1_/:_presenter_' do
          fq_presenter = [params[:_namespace1_], params[:_presenter_]].join(':')
          pass unless Presenters::App.registered?(fq_presenter)
          presenter = Presenters::App[fq_presenter].call
          render_presenter(presenter)
        end

        get '/:_namespace1_/:_namespace2_/:_presenter_' do
          fq_presenter = [params[:_namespace1_], params[:_namespace2_], params[:_presenter_]].join(':')
          pass unless Presenters::App.registered?(fq_presenter)
          presenter = Presenters::App[fq_presenter].call
          render_presenter(presenter)
        end

        # Forms engine demo
        post '/__post__/:presenter' do
          @pom = JSON.parse(request.body.read, object_class: OpenStruct)
          @grid_nesting = Integer(params[:grid_nesting] || 0)
          @base_url = request.base_url
          layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
          erb :web, layout: layout
        end

        private

        # analogous to Voom::Presenters::Api::App#render_presenter
        def render_presenter(presenter)
          @grid_nesting = Integer(params[:grid_nesting] || 0)

          begin
            before_render = Presenters::Settings.config.presenters.before_render
            render_instead, ctx = before_render
                                    .lazy
                                    .map { |p| p.call(request) }
                                    .detect(&:itself)

            if Presenters::App.registered?(render_instead)
              presenter = Presenters::App[render_instead].call
            end

            p = params.merge(ctx || {})
            @pom = presenter.expand(router: router, context: prepare_context(p))
            @base_url = request.base_url
            layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
            response.headers['X-Frame-Options'] = ENV['ALLOWALL_FRAME_OPTIONS'] || presenter.options.fetch(:allow_all_frame_options, false) ? 'ALLOWALL' : 'SAMEORIGIN'
            erb :web, layout: layout
          rescue StandardError => e
            Presenters::Settings.config.presenters.error_logger.call(
              @env['rack.errors'],
              e,
              params,
              presenter.name
            )
            raise e
          rescue Presenters::Errors::Unprocessable => e
            content_type :json
            status 422
            JSON.dump({error: e.message})
          end
        end

        def router
          settings.router_.new(base_url: "#{request.base_url}")
        end

        def prepare_context(base_params = params)
          prepare_context = Presenters::Settings.config.presenters.web_client.prepare_context.dup
          prepare_context.push(method(:scrub_context))
          context = base_params.dup
          prepare_context.reduce(context) do |params, context_proc|
            context = context_proc.call(params, session, env)
          end
          context
        end

        def scrub_context(params, _session, _env)
          %i(splat captures  grid_nesting input_tag).each do |key|
            params.delete(key) {params.delete(key.to_s)}
          end
          params
        end
      end
    end
  end
end
