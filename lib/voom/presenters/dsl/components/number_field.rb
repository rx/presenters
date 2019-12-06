module Voom
  module Presenters
    module DSL
      module Components
        class NumberField < TextField
          attr_reader :min, :max, :step, :readonly

          def initialize(**attribs_, &block)
            super(type: :number_field, **attribs_, &block)
            @min = attribs.delete(:min)
            @max = attribs.delete(:max)
            @step = attribs.delete(:step)
            @readonly = attribs.delete(:readonly){false}
            expand!
          end
        end
      end
    end
  end
end
