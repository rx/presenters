require 'erb'

module Voom
  module Presenters
    module WebClient
      # This class renders a given component.
      # First it looks for plugins that override default behavior
      # If they don't exist then it renders the base components
      class ComponentRenderer
        extend Pluggable
        include_plugins(:WebClientComponents)

        def initialize(comp,
                       render:,
                       components:,
                       index:,
                       scope: nil)
          @comp = comp
          @index = index
          @components = components
          @scope = scope
          @render = render
          initialize_plugins
        end

        def render
          return send(:"render_#{@scope ? "_#{@scope}_" : nil}#{@comp.type}",
                      @comp,
                      components: @components,
                      index: @index,
                      render: @render) if respond_to?(:"render_#{@comp.type}")

          @render.call :erb, :"components#{@scope ? "/#{@scope}" : nil}/#{@comp.type}",
                       :locals => {comp: @comp,
                                   components: @components, index: @index}
        end

        private

        def initialize_plugins
          self.class.include_plugins(:WebClientComponents, plugins: @comp.send(:_plugins_))
        end
      end
    end
  end
end
