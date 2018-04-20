require_relative 'mixins/event'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Menu < Base
          attr_accessor :items, :title, :position, :color, :open

          def initialize(title=nil, **attribs_, &block)
            super(type: :menu, **attribs_, &block)
            @title = title
            @items = []
            @position = attribs.delete(:position) || :left
            @color = attribs.delete(:color)
            @open = attributes.delete(:open){false}
            expand!
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

          private

          class Item < EventBase
            include Mixins::Tooltips

            attr_accessor :text, :disabled

            def initialize(**attribs_, &block)
              super(type: :item, **attribs_, &block)
              @text = attribs.delete(:text)
              @disabled = attribs.delete(:disabled)
              expand!
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @icon = Icon.new(parent: self, icon: icon,
                               context: context,
                               **attribs, &block)
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
