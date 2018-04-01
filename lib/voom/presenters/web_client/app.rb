require 'sinatra'
require 'uri'
require 'redcarpet'
require 'voom/trace'
require 'voom/presenters/app'
require "dry/inflector"

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
        
        # ::Voom::Presenters::Settings.configure do |config|
        #   config.presenters.root = File.join(settings.root, 'app')
        # end

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
          presenter = Presenters::App['index'].call
          @grid_nesting = params[:grid_nesting] || 0
          @pom = presenter.expand(router: router, context: params)
          erb :web
        end

        get '/:presenter' do
          pass unless Presenters::App.registered?(params[:presenter])
          presenter = Presenters::App[params[:presenter]].call
          identity_id = session[:aaa_identity]
          @pom = presenter.expand(router: router, context: params.merge(aaa_identity: identity_id))
          @grid_nesting = Integer(params[:grid_nesting] || 0)
          layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
          erb :web, layout: layout
        end

        # Forms engine demo
        post '/__post__/:presenter' do
          @pom = JSON.parse(request.body.read, object_class: OpenStruct)
          @grid_nesting = 0
          erb :web
        end

        private
        def router
          settings.router_.new(base_url: "#{request.base_url}#{env['SCRIPT_NAME']}")
        end


      end
    end
  end
end