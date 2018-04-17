module Voom
  module Presenters
    module DSL
      module Components
        class Dialog < Action
          attr_reader :target

          def initialize(**attribs_, &block)
            super(action_type: :dialog, **attribs_, &block)
            @target = attribs.delete(:target)
          end
        end
      end
    end
  end
end
