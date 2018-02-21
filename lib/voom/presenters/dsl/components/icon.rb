module Voom
  module Presenters
    module DSL
      module Components
        class Icon < Base
          attr_accessor :icon, :selected, :disabled

          def initialize(**attribs_, &block)
            super(type: :checkbox, context: context,
                  **attribs_, &block)
            @icon = attribs.delete(:icon)
            @selected = attribs.delete(:selected) || false
            @disabled = attribs.delete(:disabled) || false
            expand!
          end
        end
      end
    end
  end
end
