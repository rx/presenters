module Voom
  module Presenters
    module DSL
      module Components
        class Select < Input

          attr_reader :required, :full_width, :options, :outlined

          def initialize(**attribs_, &block)
            super(type: :select, **attribs_, &block)
            @required = attribs.delete(:required)
            @full_width = attribs.delete(:full_width){ true }
            @outlined = attribs.delete(:outlined){ true }
            @options = []
            expand!
          end

          def label(text=nil)
            return @label if locked?
            @label = text
          end

          def option(text=nil, **attribs, &block)
            @options << Option.new(parent: self,
                                   text: text,
                                   **attribs, &block)
          end

          def value
            @options.select(&:_selected?).first&.value
          end

          def hint(hint=nil)
            return @hint if locked?
            @hint = hint
          end

          class Option < Base
            attr_reader :selected, :disabled

            def initialize(**attribs_, &block)
              super(type: :select_option, **attribs_, &block)
              @value = self.value(attribs.delete(:value))
              @text = self.text(attribs.delete(:text))
              @selected =  attribs.delete(:selected)
              @disabled =  attribs.delete(:disabled)
              expand!
            end

            def value(value=nil)
              return @value if locked?
              @value = value
            end

            def text(text=nil)
              return @text if locked?
              @text = text
            end

            def _selected?
              @selected
            end
          end
        end
      end
    end
  end
end

