module Voom
  module Presenters
    module DSL
      module Components
        class Modal < Base
          attr_accessor :text

          def initialize(**attribs, &block)
            @text = attribs[:text]
            super(type: :modal, **attribs, &block)
            expand!
          end
        end
      end
    end
  end
end
