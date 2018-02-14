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

        get '/pom/:version/:presenter' do
          render_presenter
        end

        private

        def render_presenter
          # puts "/presenters/api/#{params[:version]}/#{params[:presenter]}/"
          # puts "Parameters: #{params.inspect}"
          ui = Voom::Presenters[params[:presenter]].call
          _ui_ = ui.render(router: router, layout_name: params[:layout], context: symbolize_keys(params))
          content_type :json
          JSON.dump(_ui_.to_hash)
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