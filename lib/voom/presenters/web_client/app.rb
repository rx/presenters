require 'sinatra'
require 'uri'
require 'redcarpet'
require 'voom/trace'
require "dry/inflector"

require_relative '../../presenters'
require_relative 'router'
require_relative 'markdown_render'

module Voom
  module Presenters
    module WebClient
      class App < Sinatra::Base
        include Trace
        set :root, File.expand_path('../../../../..', __FILE__)
        set :router_, Router
        set :bind, '0.0.0.0'
        set :views, Proc.new {File.join(root, "views", ENV['VIEW_ENGINE']||'mdc')}
        
        Voom::Presenters.configure do |config|
          config.presenters.root = File.join(settings.root, 'app')
        end
        Voom::Presenters.boot!

        helpers do
          def markdown(text)
            @markdown ||= Redcarpet::Markdown.new(RenderWithoutWrap, extensions = {})
            @markdown.render(text)
          end

          def inflector
            @inflector ||= Dry::Inflector.new
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

        # Forms engine demo
        post '/:presenter' do
          @pom = JSON.parse(request.body.read, object_class: OpenStruct)
          trace { @pom.inspect }
          @grid_nesting = 0
          erb :web
        end

        private
        def router
          trace {"base_url: #{request.base_url}#{env['SCRIPT_NAME']}"}
          settings.router_.new(base_url: "#{request.base_url}#{env['SCRIPT_NAME']}")
        end


      end
    end
  end
end