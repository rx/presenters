require_dependency 'voom/presenters/dsl/components/toggle_base'

module Voom
  module Presenters
    module DSL
      module Components
        class Switch < ToggleBase
          def initialize(**attribs_, &block)
            super(type: :switch, **attribs_, &block)
            expand!
          end
        end
      end
    end
  end
end
