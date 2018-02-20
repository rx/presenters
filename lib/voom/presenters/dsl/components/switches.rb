module Voom
  module Presenters
    module DSL
      module Components
        module Switches
          def checkbox(**attribs, &block)
            self << Checkbox.new(router: @router, context: @context,
                                 dependencies: @dependencies,
                                 helpers: @helpers, **attribs, &block)
          end

          def radio_button(**attribs, &block)
            self << RadioButton.new(router: @router, context: @context,
                                    dependencies: @dependencies,
                                    helpers: @helpers, **attribs, &block)
          end

          def switch(**attribs, &block)
            self << Switch.new(router: @router, context: @context,
                               dependencies: @dependencies,
                               helpers: @helpers, **attribs, &block)
          end

          def icon_toggle(icon, **attribs, &block)
            self << IconToggle.new(icon: icon, router: @router, context: @context,
                                   dependencies: @dependencies,
                                   helpers: @helpers, **attribs, &block)
          end
        end
      end
    end
  end
end
