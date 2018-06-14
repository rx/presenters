module Voom
  module Presenters
    module DSL
      module Components
        class Header < Base
          attr_accessor :title, :image

          def initialize(**attribs_, &block)
            super(type: :header,
                  context: context,
                  **attribs_, &block)
            self.title(attribs.delete(:title)) if attribs.key?(:title)
            @image = attribs.delete(:image)
            expand!
          end

          def button(icon=nil, **attributes, &block)
            return @button if locked?
            @button = Components::Button.new(icon: icon, position:[:top, :right], parent: self, context: context, **attributes, &block)
          end

          def menu(**attribs, &block)
            return @menu if locked?
            @menu = Components::Menu.new(parent: self,
                             context: context,
                             **attribs, &block)
          end

          def title(*text, **attribs, &block)
            return @title if locked?
            @title = Components::Typography.new(parent: self, type: :text, text: text, context: context, **attribs, &block)
          end

          def page_title(*text, **attribs, &block)
            return @page_title if locked?
            @page_title = PageTitle.new(parent: self, text: text, context: context, **attribs, &block)
          end

          class PageTitle < Base

            attr_accessor :text

            def initialize(**attribs_, &block)
              super(type: :page_title, **attribs_, &block)
              @text = attribs.delete(:text)
              expand!
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @icon = Icon.new(parent: self, icon: icon,
                               context: context,
                               **attribs, &block)
            end
          end

        end
      end
    end
  end
end
