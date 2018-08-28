require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class ToggleVisiblity < Base
            def initialize(**attribs_, &block)
              super(type: :toggle_visibility, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
