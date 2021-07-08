require 'erb'

module Coprl
  module Presenters
    module WebClient
      # This class renders headers for the plugins into the default layout.
      class PluginViewsPath
        extend Pluggable
        include_plugins(:WebClientComponents)

        def initialize(pom: nil, plugins: nil)
          @pom = pom
          @plugins = plugins || []
          initialize_plugins
        end

        def render
          results = []
          (@plugins + Coprl::Presenters::Settings.config.presenters.plugins).each do |plugin|
            view_dir_method = :"view_dir_#{plugin}"
            results << send(view_dir_method, @pom) if respond_to?(view_dir_method)
          end
          results
        end

        private

        def initialize_plugins
          @plugins << @pom.send(:plugins) if @pom
          self.class.include_plugins(:WebClientComponents, plugins: @plugins)
        end
      end
    end
  end
end
