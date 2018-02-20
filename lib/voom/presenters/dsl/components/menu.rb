module Voom
  module Presenters
    module DSL
      module Components
        class Menu < Base
          attr_accessor :items, :title, :side, :color

          def initialize(title=nil, **attribs_, &block)
            super(type: :menu, **attribs_, &block)
            @title = title
            @items = []
            @side = attribs.delete(:side) || :right
            @color = attribs.delete(:color)
            @button = Components::Button.new(type: :icon, icon: :more_vert,  router: router, context: context,
                                             dependencies: @dependencies, helpers: @helpers)
            expand!
          end

          def button(text=nil, **options, &block)
            return @button if frozen?
            @button = Components::Button.new(text: text, router: router, context: context,
                                             dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def item(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @items << Item.new(text: the_text, router: @router, context: @context,
                               dependencies: @dependencies,
                               helpers: @helpers,
                               **attribs, &block)
          end

          def divider(**attribs, &block)
            @items << Divider.new(router: @router, context: @context,
                                  dependencies: @dependencies,
                                  helpers: @helpers,
                                  **attribs, &block)
          end

          class Item < Base
            attr_accessor :text, :icon, :disabled

            def initialize(**attribs_, &block)
              super(type: :item, **attribs_, &block)
              @text = attribs.delete(:text)
              @icon = attribs.delete(:icon)
              @disabled  = attribs.delete(:disabled)
              expand!
            end
          end

          class Divider < Base
            def initialize(**attribs, &block)
              super(type: :divider, **attribs, &block)
            end
          end

        end
      end
    end
  end
end
