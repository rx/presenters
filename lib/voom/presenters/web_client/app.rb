require 'sinatra'
require 'uri'
require 'redcarpet'
require "dry/inflector"
require 'voom/trace'
require 'voom/presenters/app'
require 'voom/presenters/web_client/router'
require 'voom/presenters/web_client/markdown_render'
require 'voom/presenters/errors/unprocessable'
require_relative 'component_renderer'
require_relative 'plugin_headers'
require_relative 'custom_css'

module Voom
  module Presenters
    module WebClient
      class App < Sinatra::Base
        include Trace
        set :root, File.expand_path('../../../../..', __FILE__)
        set :router_, WebClient::Router
        set :bind, '0.0.0.0'
        set :views, Proc.new {File.join(root, "views", ENV['VIEW_ENGINE'] || 'mdc')}
        configure do
          enable :logging
        end

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

          def unique_id(comp)
            "#{comp.id}-#{SecureRandom.hex(4)}"
          end

          def expand_text(text)
            self.markdown(Array(text).join("\n\n")) #.gsub("\n\n", "<br/>")
          end

          def color_classname(comp)
            return "v-#{comp.type}__primary" if eq(comp.color, :primary)
            "v-#{comp.type}__secondary" if eq(comp.color, :secondary)
          end

          def color_style(comp, affects = nil)
            "#{affects}color: #{comp.color};" unless %w(primary secondary).include?(comp.color.to_s) || comp.color.nil?
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

          def custom_css(path)
            CustomCss.new(path, root: self.class.root).render
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
          layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
          erb :web, layout: layout
        end

        private

        def render_presenter(presenter)
          @grid_nesting = Integer(params[:grid_nesting] || 0)

          begin
            @pom = presenter.expand(router: router, context: prepare_context)
            layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
            response.headers['X-Frame-Options'] = 'ALLOWALL' if ENV['ALLOWALL_FRAME_OPTIONS']
            erb :web, layout: layout
          rescue Presenters::Errors::Unprocessable => e
            content_type :json
            status 422
            JSON.dump({error: e.message})
          end
        end

        def router
          settings.router_.new(base_url: "#{request.script_name}")
        end

        def prepare_context
          prepare_context = Presenters::Settings.config.presenters.web_client.prepare_context.dup
          prepare_context.push(method(:scrub_context))
          context = params.dup
          prepare_context.reduce(context) do |params, context_proc|
            context = context_proc.call(params, session, env)
          end
          context
        end

        def scrub_context(params, _session, _env)
          %i(splat captures _presenter_ grid_nesting input_tag _namespace1_ _namespace2_).each do |key|
            params.delete(key) {params.delete(key.to_s)}
          end
          params
        end
      end
    end
  end
end
