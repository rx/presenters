require_relative 'mixins/event'
require_relative 'input'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        # Base class used by toggle classes
        class ToggleBase < Input
          include Mixins::Event
          include Mixins::Tooltips

          attr_accessor :text, :checked, :value, :disabled
         
          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @text = attribs.delete(:text)
            @checked = attribs.delete(:checked) || false
            @value = attribs.delete(:value)
            @disabled = attribs.delete(:disabled) || false
          end
        end
      end
    end
  end
end
