require_relative 'toggle_base'

module Voom
  module Presenters
    module DSL
      module Components
        class Checkbox < ToggleBase
          attr_reader :class_name

          def initialize(**attribs_, &block)
            super(type: :checkbox,  **attribs_, &block)
            @class_name = attribs.delete(:class_name)
            expand!
          end
        end
      end
    end
  end
end
