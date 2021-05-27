module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module Icons
            def icon(icon=nil, **attribs, &block)
              self << Components::Icon.new(parent: self, icon: icon,
                                           **attribs, &block)
            end
          end
        end
      end
    end
  end
end
