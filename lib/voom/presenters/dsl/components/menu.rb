require_relative 'mixins/event'
require_relative 'mixins/tooltips'
require_relative 'mixins/attaches'
require_relative 'mixins/buttons'

module Voom
  module Presenters
    module DSL
      module Components
        class Menu < Base
          attr_accessor :items, :title, :position, :placement, :color, :open

          def initialize(title=nil, **attribs_, &block)
            super(type: :menu, **attribs_, &block)
            @title = title
            @items = []
            @position = attribs.delete(:position) || :left
            @placement = attribs.delete(:placement) || :default
            @color = attribs.delete(:color)
            @open = attributes.delete(:open){false}
            expand!
          end
          
          def item(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @items << Item.new(parent: self, text: the_text,
                               **attribs, &block)
          end

          def divider(**attribs, &block)
            @items << Divider.new(parent: self,
                                  **attribs, &block)
          end

          def label(**attribs, &block)
            return @label if locked?
            @label = Label.new(parent: self,
                               **attribs, &block)
          end

          private

          class Item < EventBase
            include Mixins::Tooltips

            attr_accessor :text, :disabled, :selected

            def initialize(**attribs_, &block)
              super(type: :item, **attribs_, &block)
              @text = attribs.delete(:text)
              @disabled = attribs.delete(:disabled)
              @selected = attribs.delete(:selected) { false }
              expand!
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @icon = Icon.new(parent: self, icon: icon,
                               **attribs, &block)
            end
          end

          class Label < Item
            def initialize(**attribs, &block)
              super(type: :label, **attribs, &block)
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
