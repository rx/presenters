module Coprl
  module Presenters
    module DSL
      module Components
        class UnorderedList < Base

          attr_reader :list_items, :list_style

          def initialize(**attribs_, &block)
            super(type: :unordered_list, **attribs_, &block)
            @list_style = attribs.delete(:list_style){ :disc }
            @list_items = []
            expand!
          end

          def list_item(text=nil, **attribs_, &block)
            @list_items << ListItem.new(parent: self, text: text, **attribs_, &block)
          end

          class ListItem < Base

            def initialize(**attribs_, &block)
              super(type: :list_item, **attribs_, &block)
              self.text(attribs.delete(:text)) if attribs.key?(:text)
              self.icon(attribs.delete(:icon)) if attribs.key?(:icon)
              self.unordered_list(attribs.delete(:unordered_list)) if attribs.key?(:unordered_list)
              expand!
            end

            def text(*text, **attribs, &block)
              return @text if locked?
              @text = Components::Typography.new(parent: self, type: :text, text: text, **attribs, &block)
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @icon = Components::Icon.new(parent: self, icon: icon, **attribs, &block)
            end

            def unordered_list(**attribs, &block)
              return @unordered_list if locked?
              @unordered_list = UnorderedList.new(parent: self, **attribs, &block)
            end

          end
        end
      end
    end
  end
end
