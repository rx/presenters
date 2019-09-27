require 'voom/presenters/dsl/components/mixins/append'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Chipset
            include Mixins::Append

            def chipset(chipset_variant=nil, **attribs, &block)
              self << Components::Chipset.new(chipset_variant, parent: self, **attribs, &block)
            end
          end
        end
      end
    end
  end
end
