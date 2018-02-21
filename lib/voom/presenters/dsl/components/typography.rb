module Voom
  module Presenters
    module DSL
      module Components
        class Typography < Base
          attr_accessor :text, :level

          def initialize(parent:, **attribs_, &block)
            super(type: :display, parent: parent, **attribs_, &block)
            @text = attribs.delete(:text)
            @level = attribs.delete(:level) || 1
            expand!
          end
        end
      end
    end
  end
end
