require 'sinatra'
require 'honeybadger' if ENV.fetch('HONEYBADGER_API_KEY'){false}
require 'json'
require_relative 'router'
require_relative 'render_presenter'

module Voom
  module Presenters
    module Api
      # This is the Rest API for voom services/component commands
      class App < Sinatra::Base
        include RenderPresenter
        set :root, File.expand_path('../../../..', __FILE__)
        set :router_, Router
        set :bind, '0.0.0.0'

        get '/:_presenter_.pom' do
          render_presenter(params[:_presenter_], context: prepare_context, router: router)
        end

        get '/:_namespace1_/:_presenter_.pom' do
          fq_presenter = [params[:_namespace1_], params[:_presenter_]].join(':')
          pass unless Presenters::App.registered?(fq_presenter)
          render_presenter(fq_presenter, context: prepare_context, router: router)
        end

        get '/:_namespace1_/:_namespace2_/:_presenter_.pom' do
          fq_presenter = [params[:_namespace1_], params[:_namespace2_], params[:_presenter_]].join(':')
          pass unless Presenters::App.registered?(fq_presenter)
          render_presenter(fq_presenter, context: prepare_context, router: router)
        end


        private

        def router
          settings.router_.new(base_url: "#{request.base_url}#{env['SCRIPT_NAME']}")
        end

        def prepare_context
          prepare_context = Presenters::Settings.config.presenters.web_client.prepare_context.dup
          prepare_context.push(method(:scrub_context))
          context = params.dup
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
