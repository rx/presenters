require 'rack'

module Voom
  module Presenters
      class Router

        attr_reader :base_url

        def initialize(base_url: nil)
          @base_url = base_url
        end

        def url(command: nil, render: nil, host: false, context:)
          _params_ = context.dup
          return build_render_url(render, _params_, host: host) unless command
          _params_[:redirect]=build_render_url(render, _params_) if render
          build_command_url(command, _params_)
        end

        def scrub_params(_params_)
          _params_.delete('captures')
          _params_.delete('presenter')
          _params_.delete('action')
          _params_.delete('errors')
          _params_
        end

        private

        def build_command_url(command, params)
          return '' unless command
          add_query_params(command, params)
        end

        def build_render_url(render_, params, host:)
          return '#' unless render_
          render = render_.to_s
          return render if render.start_with?('http')
          render = render.gsub(':', '/')
          seperator = render.start_with?('/') ? '' : '/'
          url = "#{host ? base_url : nil}#{seperator}#{render}"
          add_query_params(url, params)
        end

        def add_query_params(url, params)
          query_params = build_params(params)
          if (!query_params.nil? && !query_params.empty?)
            query_seperator = url.include?('?') ? '&' : '?'
            url = "#{url}#{query_seperator}#{query_params}"
          end
          url
        end

        def build_params(params)
          Rack::Utils.build_nested_query(scrub_params(params))
        end
      end
    end
  end
