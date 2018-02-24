require 'sinatra'
require 'uri'
require 'redcarpet'

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
        
        helpers do
          def markdown(text)
            @markdown ||= Redcarpet::Markdown.new(Redcarpet::Render::HTML, extensions = {})
            @markdown.render(text)
          end
        end

        get '/' do
          presenter = Voom::Presenters['index'].call
          @pom = presenter.expand(router: router, context: params)
          erb :web
        end

        get '/:presenter' do
          presenter = Voom::Presenters[params[:presenter]].call
          @pom = presenter.expand(router: router, context: params)
          erb :web, layout: (request.xhr? ? false : true)
        end

        private
        def router
          settings.router_.new(base_url: request.base_url)
        end
      end
    end
  end
end