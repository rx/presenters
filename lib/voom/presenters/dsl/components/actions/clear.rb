module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Clear < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :clear, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
