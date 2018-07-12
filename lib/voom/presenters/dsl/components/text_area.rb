require_relative 'text_field'

module Voom
  module Presenters
    module DSL
      module Components
        class TextArea < TextField
          attr_reader :rows, :cols
          
          def initialize(**attribs_, &block)
            super(type: :text_area, **attribs_, &block)
            @rows = attribs.delete(:rows) || 3
            @cols = attribs.delete(:cols) || 40 unless full_width
            expand!
          end
        end
      end
    end
  end
end

