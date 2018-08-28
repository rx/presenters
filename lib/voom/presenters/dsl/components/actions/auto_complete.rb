require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class AutoComplete < Base
            def initialize(**attribs_, &block)
              super(type: :autocomplete, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
