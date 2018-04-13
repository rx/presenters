module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Tooltips
            def tooltip(text= nil, **attribs, &block)
              return @tooltip if locked?
              @tooltip = Components::Tooltip.new(parent: self, text: text,
                                                 context: context,
                                                 **attribs, &block)
            end
          end
        end
      end
    end
  end
end
