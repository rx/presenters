module Voom
  module Presenters
    module DSL
      module Components
        module Lists
          class Separator < Base
            def initialize(**attribs_, &block)
              super(type: :separator, **attribs_, &block)
              expand!
            end
          end
        end
      end
    end
  end
end