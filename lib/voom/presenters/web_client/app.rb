require 'sinatra'
require 'uri'
require_relative '../../presenters'
require_relative 'router'

module Voom
  module Presenters
    module WebClient
      class App < Sinatra::Base
        set :root, File.expand_path('../../../../..', __FILE__)
        set :router_, Router
        set :bind, '0.0.0.0'
        set :views, Proc.new { File.join(root, "views", 'mdl') }
       
        get '/' do
          ui = Voom::Presenters['index'].call
          @ui = ui.render(router: router, context: params)
          erb :web
        end

        get '/:presenter' do
          presenter = params[:presenter]
          ui = Voom::Presenters[presenter].call
          @ui = ui.render(router: router, context: params)
          erb :web
        end

        private
        def router
          settings.router_.new(base_url: request.base_url)
        end
      end
    end
  end
end