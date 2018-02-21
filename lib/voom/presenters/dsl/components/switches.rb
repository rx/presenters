module Voom
  module Presenters
    module DSL
      module Components
        module Switches
          def checkbox(**attribs, &block)
            self << Checkbox.new(parent: self, **attribs, &block)
          end

          def radio_button(**attribs, &block)
            self << RadioButton.new(parent: self, **attribs, &block)
          end

          def switch(**attribs, &block)
            self << Switch.new(parent: self, **attribs, &block)
          end

          def icon_toggle(icon, **attribs, &block)
            self << IconToggle.new(parent: self, icon: icon, **attribs, &block)
          end
        end
      end
    end
  end
end
