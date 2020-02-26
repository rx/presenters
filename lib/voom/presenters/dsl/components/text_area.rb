module Voom
  module Presenters
    module DSL
      module Components
        class TextArea < TextField
          attr_reader :rows, :cols

          def initialize(**attribs_, &block)
            super(type: :text_area, **attribs_, &block)
            @rows = attribs.delete(:rows) || default(:rows)
            @cols = attribs.delete(:cols) || default(:cols) unless full_width
            expand!
          end
        end
      end
    end
  end
end

