module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module ExpansionPanels
            def expansion_panel(**attributes, &block)
              self << Components::ExpansionPanel.new(parent: self, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
