module Voom
  module Presenters
    module DSL
      module Components
        class Tooltip < Base
          attr_reader :position

          def initialize(**attribs_, &block)
            super(type: :tooltip,
                  **attribs_, &block)
            @position = attribs.delete(:position){ :left }
            self.text(attribs.delete(:text)) if attribs.key?(:text)
            expand!
          end

          def text(*text, **attribs, &block)
            return @text if locked?
            @text = Components::Typography.new(parent: self, type: :text, text: text, **attribs, &block)
          end
        end
      end
    end
  end
end
