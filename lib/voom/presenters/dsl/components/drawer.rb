module Voom
  module Presenters
    module DSL
      module Components
        class Drawer < Base
          attr_accessor :title

          def initialize(**attribs_, &block)
            super(type: :drawer, **attribs_, &block)
            @title = attribs[:title]
            expand!
          end

          def menu(**attribs, &block)
            return @menu if frozen?
            @menu = Menu.new(router: @router, context: @context,
                             dependencies: @dependencies,
                             helpers: @helpers, **attribs, &block)
            @components = [@menu]
          end

        end
      end
    end
  end
end
