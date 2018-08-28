require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Updates < Base
            def initialize(**attribs_, &block)
              super(type: :update, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
