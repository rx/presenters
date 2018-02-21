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
            @button = Components::Button.new(parent: self, type: :icon, icon: :more_vert)
            expand!
          end

          def button(text=nil, **options, &block)
            return @button if locked?
            @button = Components::Button.new(text: text, parent: self,
                                             context: context,
                                             **options, &block)
          end

          def item(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @items << Item.new(parent: self, text: the_text, 
                               context: context,
                               **attribs, &block)
          end

          def divider(**attribs, &block)
            @items << Divider.new(parent: self,
                                  context: context,
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
