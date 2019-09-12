require 'voom/presenters/dsl/components/toggle_base'

module Voom
  module Presenters
    module DSL
      module Components
        class IconToggle < ToggleBase
          attr_accessor :icon, :on_icon, :selected

          def initialize(**attribs_, &block)
            super(type: :icon_toggle, **attribs_, &block)
            @icon = attribs.delete(:icon)
            @on_icon = attribs.delete(:on_icon) { @icon }
            @selected = attribs.delete(:selected) { false }
            expand!
          end
        end
      end
    end
  end
end
