require 'voom/presenters/dsl/components/actions/base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class ToggleVisibility < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :toggle_visibility, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
