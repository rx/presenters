require 'rack'

module Voom
  module Presenters
    module Api
      class Router

        attr_reader :base_url

        def initialize(base_url: nil)
          @base_url = base_url
        end

        def url(command: nil, render: nil, entity: nil, context:)
          _params_ = context.dup
          # if it is a local page command
          # return build_local_render(command, render, entity, _params_) if local_render?(render)
          return build_render_url(render, entity, _params_) unless command
          _params_[:redirect]=build_render_url(render, entity, _params_) if render
          build_command_url(command, entity, _params_)
        end

        def local_render?(render)
          return unless render
          render.to_s.start_with?('#')
        end

        def build_local_render(command, render, entity, context)

          client_command = render[/(.*?)\(/m, 1]

          start_params = render.index('(')
          end_params = render.rindex(')')
          client_params = render[start_params+1..end_params-1]
          client_params = client_params.split(',')

          client_command += '('
          client_params.each.with_index do |p, index|
            client_command += ',' if index > 0
            url_var = p[/{url\((.*?)\)}/m, 1]
            client_command += build_client_url(url_var.strip, entity, context) if url_var && command.nil?
            client_command += p.strip if !url_var
          end
          client_command += ')'

          client_command
        end

        def join_errors
          '<br/>'
        end

        def scrub_params(_params_)
          %i(splat captures service_command view api_version action layout).each do |key|
            _params_.delete(key)
          end
          # puts _params_.inspect
          _params_
        end

        private

        def build_command_url(command, entity, params)
          return '' unless command
          "/api/v1/#{command}#{entity_uuid(entity)}?#{build_params(params)}"
        end

        def build_render_url(render, entity, params)
          return '#' unless render
          "/#{render}#{entity_uuid(entity)}?#{build_params(params)}"
        end

        def build_client_url(render, entity, params)
          return '#' unless render
          build_render_url(render, entity, params)
        end

        def entity_uuid(entity)
          entity ? "/#{entity.id}" : nil
        end

        def build_params(params)
          Rack::Utils.build_nested_query(scrub_params(params))
        end
      end
    end
  end
end
