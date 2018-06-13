module Voom
  module Presenters
    module DSL
      module Components
        module Lists
          class Header < Line
            attr_accessor :total_lines

            def initialize(context:, **attribs_, &block)
              super(type: :header, context: context, **attribs_, &block)
              @total_lines = attribs.delete(:total_lines) || 0
              expand!
            end
          end
        end
      end
    end
  end
end