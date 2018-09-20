module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module TabBars
            def tab_bar(**attribs, &block)
              self << Components::TabBar.new(parent: self, **attribs, &block)
            end
          end
        end
      end
    end
  end
end
