require_relative 'toggle_base'

module Voom
  module Presenters
    module DSL
      module Components
        class Checkbox < ToggleBase

          def initialize(**attribs_, &block)
            super(type: :checkbox,  **attribs_, &block)
            expand!
          end
        end
      end
    end
  end
end
