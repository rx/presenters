module Voom
  module Presenters
    module DSL
      module Components
        module Lists
          class Header < Line
            def initialize(context:, **attribs_, &block)
              super(type: :header, context: context, **attribs_, &block)
              expand!
            end
          end
        end
      end
    end
  end
end