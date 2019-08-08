require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/input'
require 'voom/presenters/dsl/components/mixins/color'

module Voom
  module Presenters
    module DSL
      module Components
        # Base class used by toggle classes
        class ToggleBase < Input
          include Mixins::Color

          attr_accessor :text,
                        :text_color,
                        :checked,
                        :value,
                        :disabled,
                        :off_value

          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @text = attribs.delete(:text)
            @text_color = validate_color(attribs.delete(:text_color) { nil })
            @checked = attribs.delete(:checked) { false }
            @value = attribs.delete(:value)
            @disabled = attribs.delete(:disabled) { false }
            @off_value = attribs.delete(:off_value)
          end
        end
      end
    end
  end
end
