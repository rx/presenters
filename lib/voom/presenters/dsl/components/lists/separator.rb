module Voom
  module Presenters
    module DSL
      module Components
        module Lists
          class Separator < Base
            def initialize(context:, **attribs_, &block)
              super(type: :separator, context: context, **attribs_, &block)
              expand!
            end
          end
        end
      end
    end
  end
end