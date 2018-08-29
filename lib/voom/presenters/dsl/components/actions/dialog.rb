require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Dialog < Base
            def initialize(**attribs_, &block)
              super(type: :dialog, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
