require 'voom/presenters/dsl/components/toggle_base'

module Voom
  module Presenters
    module DSL
      module Components
        class Checkbox < ToggleBase
          attr_accessor :indeterminate

          def initialize(**attribs_, &block)
            super(type: :checkbox,  **attribs_, &block)
            @indeterminate = attribs.delete(:indeterminate) { false }
            expand!
          end
        end
      end
    end
  end
end
