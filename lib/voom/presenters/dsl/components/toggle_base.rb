require_dependency 'voom/presenters/dsl/components/mixins/event'
require_dependency 'voom/presenters/dsl/components/input'

module Voom
  module Presenters
    module DSL
      module Components
        # Base class used by toggle classes
        class ToggleBase < Input
          attr_accessor :text, :checked, :value, :disabled
         
          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @text = attribs.delete(:text)
            @checked = attribs.delete(:checked) { false }
            @value = attribs.delete(:value)
            @disabled = attribs.delete(:disabled) { false }
          end
        end
      end
    end
  end
end
