require 'voom/presenters/dsl/components/input'

module Voom
  module Presenters
    module DSL
      module Components
        class Slider < Input
          attr_reader :value_min,
                      :value_max,
                      :step,
                      :show_tracker_marks,
                      :discrete

          def initialize(**attribs_, &block)
            super(type: :slider, **attribs_, &block)
            @value_min = attribs.delete(:value_min){0}
            @value_max = attribs.delete(:value_max){100}
            @step = attribs.delete(:step){nil}
            @discrete = attribs.delete(:discrete){true}
            @show_tracker_marks = attribs.delete(:show_tracker_marks){false}
            @show_tracker_marks = false unless discrete
            expand!
          end

          def label(text=nil)
            return @label if locked?
            @label = text
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

