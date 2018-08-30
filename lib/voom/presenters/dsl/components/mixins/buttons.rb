module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Buttons
            def button(text=nil, **attributes, &block)
              self << Components::Button.new(text: text, parent: self, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
