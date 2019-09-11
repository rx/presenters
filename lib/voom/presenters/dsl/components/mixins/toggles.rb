require 'voom/presenters/dsl/components/mixins/append'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Toggles
            include Mixins::Append

            def checkbox(**attribs, &block)
              self << Checkbox.new(parent: self, **attribs, &block)
            end

            def radio_button(**attribs, &block)
              self << RadioButton.new(parent: self,
                                      **attribs, &block)
            end

            def switch(**attribs, &block)
              self << Switch.new(parent: self,
                                 **attribs, &block)
            end

            def icon_button(icon, **attribs, &block)
              trace { attribs.inspect }
              self << IconButton.new(parent: self,
                                     icon: icon,
                                     **attribs, &block)
            end
            alias icon_toggle icon_button
          end
        end
      end
    end
  end
end

