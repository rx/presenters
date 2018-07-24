module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Sliders
            def slider(**attributes, &block)
              self << Components::Slider.new(parent: self, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
