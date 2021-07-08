module Coprl
  module Presenters
    module DSL
      # The default dsl for ui
      # This class is held in the container. When a request to render a UI comes in
      # It creates a new UserInterface instance, binding it to the router and context of the request
      class Definition
        attr_reader :name, :namespace, :options
        def initialize(name, namespace, options, &block)
          @block = block
          @name = name
          @namespace = namespace
          @options = options
        end

        def build
          self
        end

        def expand(router: , context:{}, plugins: [], &block)
          presenter = UserInterface.new(router: router, context: context, plugins: plugins, name: @name, namespace: @namespace, &@block)
          yield(presenter) if block
          presenter.expand_instance
        end

        # Used by attach
        def expand_child(parent:, context: {})
          presenter = UserInterface.new(parent: parent, context: context, namespace: @namespace, &@block)
          presenter.expand_instance(freeze: false)
        end
      end
    end
  end
end
