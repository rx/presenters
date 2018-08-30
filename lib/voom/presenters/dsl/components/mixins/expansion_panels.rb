module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module ExpansionPanels
            def expansion_panel(text=nil, **attributes, &block)
              self << Components::ExpansionPanel.new(parent: self, text: text, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
