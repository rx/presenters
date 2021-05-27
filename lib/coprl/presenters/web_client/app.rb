require 'sinatra'
require 'honeybadger' if ENV['HONEYBADGER_API_KEY']
require 'uri'
require 'redcarpet'
require 'dry/inflector'

module Coprl
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
        helpers Helpers::Sinatra

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
