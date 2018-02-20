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
        set :router, Router
        set :bind, '0.0.0.0'

        get '/pom/:presenter' do
          render_presenter
        end

        private

        def render_presenter
          # puts "/presenters/api/#{params[:version]}/#{params[:presenter]}/"
          # puts "Parameters: #{params.inspect}"
          presenter = Voom::Presenters[params[:presenter]].call
          pom = presenter.expand(router: router, context: symbolize_keys(params))
          content_type :json
          JSON.dump(pom.to_hash)
        end

        def router
          settings.router.new
        end

        def symbolize_keys(hash)
          hash.each_with_object({}) {|(k, v), h| h[k.to_sym] = v.is_a?(Hash) ? symbolize_keys(v) : v}
        end
      end
    end
  end
end