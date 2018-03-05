require_relative 'list_line'

module Voom
  module Presenters
    module DSL
      module Components
        class List < Base

          attr_reader :lines
          def initialize(**attribs, &block)
            super(type: :list, context: context,
                  **attribs, &block)
            @lines = []
            expand!
          end
          
          def line(**attribs, &block)
            @lines << ListLine.new(parent:self, **attribs, &block)
          end
        end
      end
    end
  end
end


