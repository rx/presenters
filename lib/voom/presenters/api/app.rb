require 'sinatra'
require 'honeybadger' if ENV.fetch('HONEYBADGER_API_KEY'){false}
require 'json'

module Voom
  module Presenters
    module Api
      # This is the Rest API for voom services/component commands
      class App < Sinatra::Base
        set :root, File.expand_path('../../../..', __FILE__)
        set :router_, Router
        set :bind, '0.0.0.0'

        get '/:_presenter_.pom' do
          render_presenter(params[:_presenter_])
        end

        get '/:_namespace1_/:_presenter_.pom' do
          fq_presenter = [params[:_namespace1_], params[:_presenter_]].join(':')
          pass unless Presenters::App.registered?(fq_presenter)
          render_presenter(fq_presenter)
        end

        get '/:_namespace1_/:_namespace2_/:_presenter_.pom' do
          fq_presenter = [params[:_namespace1_], params[:_namespace2_], params[:_presenter_]].join(':')
          pass unless Presenters::App.registered?(fq_presenter)
          render_presenter(fq_presenter)
        end


        private

        # analogous to Voom::Presenters::WebClient::App#render_presenter
        def render_presenter(presenter)
          begin
            before_render = Presenters::Settings.config.presenters.before_render
            render_instead, ctx = before_render
                                    .lazy
                                    .map { |p| p.call(request) }
                                    .detect(&:itself)

            if Presenters::App.registered?(render_instead)
              presenter = render_instead
            end

            p = params.merge(ctx || {})
            presenter = Voom::Presenters::App[presenter].call
            pom = presenter.expand(router: router, context: prepare_context(p))
            content_type :json
            JSON.dump(pom.to_hash)
          rescue StandardError => e
            presenter_name = presenter.respond_to?(:name) ? presenter.name : '(unknown)'
            Presenters::Settings.config.presenters.error_logger.call(
              @env['rack.errors'],
              e,
              params,
              presenter_name
            )
            raise e
          end
        end

        def router
          settings.router_.new(base_url: "#{request.base_url}#{env['SCRIPT_NAME']}")
        end

        def prepare_context(base_params = params)
          prepare_context = Presenters::Settings.config.presenters.web_client.prepare_context.dup
          prepare_context.push(method(:scrub_context))
          context = base_params.dup
          prepare_context.reduce(context) do |params, context_proc|
            context_proc.call(params, session, env)
          end
          context
        end

        def scrub_context(params, _session, _env)
          %i(splat captures _presenter_ grid_nesting).each do |key|
            params.delete(key)
          end
          params
        end
      end
    end
  end
end
