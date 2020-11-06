module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class ToggleDisabled < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :toggle_disabled, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end