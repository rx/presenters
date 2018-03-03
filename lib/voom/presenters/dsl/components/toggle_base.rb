require_relative 'mixins/link'
require_relative 'mixins/modifies'

module Voom
  module Presenters
    module DSL
      module Components
        # Base class used by toggle classes
        class ToggleBase < Base
          include Mixins::Link
          include Mixins::Modifies
          attr_accessor :text, :checked, :value, :disabled
         
          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @text = attribs.delete(:text)
            @checked = attribs.delete(:checked)
            @value = attribs.delete(:value)
            @disabled = attribs.delete(:disabled) || false
          end
        end
      end
    end
  end
end
