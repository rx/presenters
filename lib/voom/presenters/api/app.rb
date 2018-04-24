require 'sinatra'
require 'json'
require_relative '../../presenters'
require_relative 'router'

module Voom
  module Presenters
    module Api
      # This is the Rest API for voom services/component commands
      class App < Sinatra::Base
        set :root, File.expand_path('../../../..', __FILE__)
        set :router_, Router
        set :bind, '0.0.0.0'

        get '/:_presenter_.pom' do
          render_presenter
        end

        private

        def render_presenter
          # puts "/presenters/api/#{params[:version]}/#{params[:presenter]}/"
          # puts "Parameters: #{params.inspect}"
          presenter = Voom::Presenters::App[params[:_presenter_]].call
          pom = presenter.expand(router: router, context: prepare_context)
          content_type :json
          JSON.dump(pom.to_hash)
        end

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