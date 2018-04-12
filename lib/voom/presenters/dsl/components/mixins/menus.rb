module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Menus
            def menu(**attributes, &block)
              self << Components::Menu.new(parent: self, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
