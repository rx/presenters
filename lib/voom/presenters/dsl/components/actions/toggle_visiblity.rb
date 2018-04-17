module Voom
  module Presenters
    module DSL
      module Components
        class ToggleVisiblity < Action
          attr_reader :target

          def initialize(**attribs_, &block)
            super(action_type: :toggle_visibility, **attribs_, &block)
            @target = attribs.delete(:target)
          end
        end
      end
    end
  end
end
