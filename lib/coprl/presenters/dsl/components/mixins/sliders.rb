module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module Sliders
            def slider(**attributes, &block)
              self << Components::Slider.new(parent: self, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
