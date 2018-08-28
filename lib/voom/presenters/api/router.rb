require 'rack'

module Voom
  module Presenters
    module Api
      class Router

        attr_reader :base_url

        def initialize(base_url: nil)
          @base_url = base_url
        end

        def url(command: nil, render: nil, context:)
          _params_ = context.dup
          return build_render_url(render, _params_) unless command
          _params_[:redirect]=build_render_url(render, _params_) if render
          build_command_url(command, _params_)
        end

        def scrub_params(_params_)
          _params_.delete('presenter')
          _params_.delete('action')
          _params_.delete('errors')
          _params_
        end

        private

        def build_command_url(command, params)
          return '' unless command
          seperator = command.include?('?') ? '&' : '?'
          "#{command}#{seperator}#{build_params(params)}"
        end

        def build_render_url(render_, params)
          return '#' unless render_
          render = render_.to_s
          return render if render.start_with?('http')
          seperator = render.start_with?('/') ? '' : '/'
          url = "#{base_url}#{seperator}#{render}"
          query_params = build_params(params)
          if(query_params)
            query_seperator = render.include?('?') ? '&' : '?'
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
end