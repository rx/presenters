module Voom
  module Presenters
    module DSL
      module Components
        class Paragraph < Base
          attr_accessor :text

          def initialize(**attribs, &block)
            @text = attribs[:text]
            super(type: :paragraph, **attribs, &block)
            expand!
          end
        end
      end
    end
  end
end
