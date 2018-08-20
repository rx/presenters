module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Maps
            def map(**attributes, &block)
              self << Components::Map.new(parent: self, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end