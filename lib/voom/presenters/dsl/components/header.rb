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

          def menu(**attribs, &block)
            return @menu if locked?
            @menu = Menu.new(parent: self,
                             context: context,
                             **attribs, &block)
          end

          def title(text=nil, **attribs, &block)
            return @title if locked?
            @title = Components::Typography.new(parent: self, type: :text, text: text, context: context, **attribs, &block)
          end

        end
      end
    end
  end
end
