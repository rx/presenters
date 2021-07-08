module Coprl
  module Presenters
    module Rails
      module Concerns
        module CoprlPartial
          extend ActiveSupport::Concern

          included do
            before_action :set_view_path
          end
          
          module ClassMethods
            def presenter_plugin(*plugins)
              @plugins = Array(plugins)
            end

            def plugins
              @plugins || []
            end
          end

          def set_view_path
            paths = Coprl::Presenters::WebClient::PluginViewsPath.new(pom: nil, plugins: self.class.plugins).render
            paths.each do |path|
              prepend_view_path path
            end
          end

          def prepare_context(base_params = params)
            prepare_context = Coprl::Presenters::Settings.config.presenters.web_client.prepare_context.dup
            prepare_context.push(method(:scrub_context))
            context = base_params.dup.to_unsafe_hash
            prepare_context.reduce(context) do |params, context_proc|
              context = context_proc.call(params, session, request.env)
            end
            context
          end

          def scrub_context(params, _session, _env)
            %i(grid_nesting input_tag).each do |key|
              params.delete(key) {params.delete(key.to_s)}
            end
            params
          end

        end
      end
    end
  end
end
