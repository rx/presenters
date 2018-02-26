require 'sinatra'
require 'uri'
require 'redcarpet'
require 'voom/trace'

require_relative '../../presenters'
require_relative 'router'

module Voom
  module Presenters
    module WebClient
      class App < Sinatra::Base
        include Trace
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
          @grid_nesting = params[:grid_nesting] || 0
          @pom = presenter.expand(router: router, context: params)
          erb :web
        end

        get '/:presenter' do
          presenter = Voom::Presenters[params[:presenter]].call
          @pom = presenter.expand(router: router, context: params)
          trace {"layout: #{request.env['HTTP_X_NO_LAYOUT']}"}
          @grid_nesting = Integer(params[:grid_nesting] || 0)
          layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
          erb :web, layout: layout
        end

        private
        def router
          settings.router_.new(base_url: request.base_url)
        end
      end
    end
  end
end