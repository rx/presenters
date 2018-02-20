module Voom
  module Presenters
    module DSL
      module Components
        class Typography < Base
          attr_accessor :text, :level

          def initialize(**attribs_, &block)
            super(type: :display, **attribs_, &block)
            @text = attribs.delete(:text)
            @level = attribs.delete(:level) || 1
            expand!
          end
        end
      end
    end
  end
end
