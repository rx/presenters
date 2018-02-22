require_relative 'list_line'

module Voom
  module Presenters
    module DSL
      module Components
        class List < Base

          attr_reader :lines
          def initialize(**attribs, &block)
            @lines = []
            super(type: :list, context: context,
                  **attribs, &block)
            expand!
          end
          
          def line(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @lines << ListLine.new(parent:self, text: the_text, **attribs, &block)
          end
        end
      end
    end
  end
end


