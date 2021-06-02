module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module Tooltips
            def tooltip(text= nil, **attribs, &block)
              return @tooltip if locked?
              @tooltip = Components::Tooltip.new(parent: self, text: text,
                                                 **attribs, &block)
            end
          end
        end
      end
    end
  end
end
