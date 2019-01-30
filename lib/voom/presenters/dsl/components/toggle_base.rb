require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/input'

module Voom
  module Presenters
    module DSL
      module Components
        # Base class used by toggle classes
        class ToggleBase < Input
          attr_accessor :text, :text_color, :checked, :value, :disabled
         
          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @text = attribs.delete(:text)
            @text_color = attribs.delete(:text_color)
            @checked = attribs.delete(:checked) { false }
            @value = attribs.delete(:value)
            @disabled = attribs.delete(:disabled) { false }
          end
        end
      end
    end
  end
end
