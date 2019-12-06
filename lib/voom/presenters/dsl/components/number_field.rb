module Voom
  module Presenters
    module DSL
      module Components
        class NumberField < TextField
          attr_reader :min, :max, :step

          def initialize(**attribs_, &block)
            super(type: :number_field, **attribs_, &block)
            @min = attribs.delete(:min)
            @max = attribs.delete(:max)
            @step = attribs.delete(:step)
            expand!
          end
        end
      end
    end
  end
end
