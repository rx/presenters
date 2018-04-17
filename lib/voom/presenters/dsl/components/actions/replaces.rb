module Voom
  module Presenters
    module DSL
      module Components
        class Replaces < Action
          attr_reader :presenter, :target

          def initialize(**attribs_, &block)
            super(action_type: :replaces, **attribs_, &block)
            @target = attribs.delete(:target)
            @presenter = attribs.delete(:presenter)
          end
        end
      end
    end
  end
end
