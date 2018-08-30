module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Steppers
            def stepper(**attributes, &block)
              self << Components::Stepper.new(parent: self, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
