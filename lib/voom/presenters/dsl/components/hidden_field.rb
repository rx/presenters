module Voom
  module Presenters
    module DSL
      module Components
        class HiddenField < Input
          attr_reader :name

          def initialize(**attribs_, &block)
            super(type: :hidden_field,
                  **attribs_, &block)
            self.value(attribs.delete(:value)) if attribs.key?(:value)
            expand!
          end

          def value(value=nil)
            return @value if locked?
            @value = value
          end
        end
      end
    end
  end
end

