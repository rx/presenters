require 'erb'

module Coprl
  module Presenters
    module WebClient
      # This class renders headers for the plugins into the default layout.
      class PluginHeaders
        extend Pluggable
        include_plugins(:WebClientComponents)

        def initialize(pom:, render:)
          @pom = pom
          @render = render
          initialize_plugins
        end

        def render
          results = ""
          ((@plugins||[]) + Coprl::Presenters::Settings.config.presenters.plugins).each do |plugin|
            header_method = :"render_header_#{plugin}"
            results << send(header_method,
                 @pom,
                 render: @render) if respond_to?(header_method)
          end
          results
        end

        private

        def initialize_plugins
          @plugins = @pom.send(:plugins)
          self.class.include_plugins(:WebClientComponents, plugins: @plugins)
        end
      end
    end
  end
end
