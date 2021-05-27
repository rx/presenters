module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module TabBars
            def tab_bar(**attribs, &block)
              self << Components::TabBar.new(parent: self, **attribs, &block)
            end

            alias tabs tab_bar
          end
        end
      end
    end
  end
end
