require_relative 'text_field'

module Voom
  module Presenters
    module DSL
      module Components
        class RichTextArea < TextField
          attr_reader :height, :placeholder

          def initialize(**attribs_, &block)
            super(type: :rich_text_area, **attribs_, &block)
            @height = attribs.delete(:height) || '350px'
            @placeholder = attribs.delete(:placeholder)
            expand!
          end
        end
      end
    end
  end
end