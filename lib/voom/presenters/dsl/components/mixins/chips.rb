require_relative 'append'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Chips
            include Mixins::Append

            def chip(text= nil, **attribs, &block)
              self << Components::Chip.new(parent: self, text: text,
                                                 context: context,
                                                 **attribs, &block)
            end
          end
        end
      end
    end
  end
end
