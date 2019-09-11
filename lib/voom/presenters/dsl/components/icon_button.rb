require 'voom/presenters/dsl/components/toggle_base'

module Voom
  module Presenters
    module DSL
      module Components
        class IconButton < ToggleBase
          attr_accessor :icon, :selected, :disabled

          def initialize(**attribs_, &block)
            super(type: :icon_button, **attribs_, &block)
            @icon = attribs.delete(:icon)
            @selected = attribs.delete(:selected) { false }
            @disabled = attribs.delete(:disabled) { false }
            expand!
          end
        end
      end
    end
  end
end
