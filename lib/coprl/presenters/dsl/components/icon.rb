module Coprl
  module Presenters
    module DSL
      module Components
        class Icon < IconBase
          include Mixins::Tooltips
          attr_accessor :text

          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @text = attribs.delete(:text)
            expand!
          end
        end
      end
    end
  end
end
