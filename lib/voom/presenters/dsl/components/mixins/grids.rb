module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Grids
            def grid(color: nil, **attributes, &block)
              self << Components::Grid.new(parent: self, color: color, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
