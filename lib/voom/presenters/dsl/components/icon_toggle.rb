module Voom
  module Presenters
    module DSL
      module Components
        class IconToggle < ToggleBase
          attr_accessor :icon, :selected, :disabled

          def initialize(**attribs_, &block)
            super(type: :icon_toggle, **attribs_, &block)
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
