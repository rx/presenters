require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Navigates < Base
            def initialize(**attribs_, &block)
              super(type: :navigates, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
