require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/input'

module Voom
  module Presenters
    module DSL
      module Components
        # Base class used by toggle classes
        class ToggleBase < Input
          attr_accessor :text,
                        :text_color,
                        :checked,
                        :value,
                        :disabled,
                        :on_value,
                        :off_value
         
          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @text = attribs.delete(:text)
            @text_color = attribs.delete(:text_color)
            @checked = attribs.delete(:checked) { false }
            @value = attribs.delete(:value)
            @disabled = attribs.delete(:disabled) { false }
            @on_value = attribs.delete(:on_value) { 'on' }
            @off_value = attribs.delete(:off_value)
          end
        end
      end
    end
  end
end
