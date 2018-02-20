require_relative 'user_interface'

module Voom
  module Presenters
    module DSL
      # The default dsl for ui
      # You can override this using the UI.config.dsl.definition setting.
      # This class is held in the container. When a request to render a UI comes in
      # It creates a new UserInterface instance, binding it to the router and context of the request
      class Definition
        def initialize(&block)
          @block = block
        end

        def build
          self
        end

        def render(router:, context:{}, content:nil)
          ui = UserInterface.new(router: router, context: context, content:content, &@block)
          ui.render_instance
        end
      end
    end
  end
end