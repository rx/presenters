module Coprl
  module Presenters
    module Rails
      module Concerns
        module CoprlViewPaths
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
        end
      end
    end
  end
end
