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

        helpers do
          def markdown(text)
            @markdown ||= Redcarpet::Markdown.new(RenderWithoutWrap, extensions = {})
            @markdown.render(text)
          end

          def inflector
            @inflector ||= Dry::Inflector.new
          end

          def eq(attrib, value)
            attrib.to_s == value.to_s
          end

          def unique_id(comp)
            "#{comp.id}-#{SecureRandom.hex(4)}"
          end

          def expand_text(text)
            (text||[]).map {|line| "#{markdown(line)}<br/>"}.join
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
          @pom = presenter.expand(router: router, context: prepare_context)
          @grid_nesting = Integer(params[:grid_nesting] || 0)
          layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
          response.headers['X-Frame-Options'] = 'ALLOWALL' if ENV['ALLOWALL_FRAME_OPTIONS']
          erb :web, layout: layout
        end

        # Forms engine demo
        post '/__post__/:presenter' do
          @pom = JSON.parse(request.body.read, object_class: OpenStruct)
          @grid_nesting = Integer(params[:grid_nesting] || 0)
          layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
          erb :web, layout: layout
        end

        private
        def router
          settings.router_.new(base_url: "#{request.base_url}#{env['SCRIPT_NAME']}")
        end

        def prepare_context
          Presenters::Settings.config.presenters.web_client.prepare_context.reduce(params) do |params, context_proc|
            context_proc.call(params, session, env)
          end
        end
      end
    end
  end
end