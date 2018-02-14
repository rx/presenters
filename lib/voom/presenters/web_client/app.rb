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

        def router
          settings.router_.new(base_url: request.base_url)
        end

        get '/' do
          ui = Voom::Presenters['index'].call
          @ui = ui.render(router: router, context: params)
          erb :web
        end

        get '/web/:version/:render' do
          ui_name = params[:render]
          ui = Voom::Presenters[ui_name].call
          @ui = ui.render(router: router, context: params)
          erb params[:naked] ? :naked : :web
        end

        # TODO remove component and use dot '.' in view names
        # get '/web/:render/?:entity_key?' do
        #   ui_name = params[:render]
        #   ui = Voom::UI[ui_name].call
        #   @ui = ui.render(router: router, context: params, layout_name: naked? ? 'none' : nil)
        #   erb naked? ? :naked : :web
        # end

        private

        def naked?
          params[:naked]
        end
      end
    end
  end
end