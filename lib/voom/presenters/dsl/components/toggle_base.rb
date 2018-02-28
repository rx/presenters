require_relative 'mixin_link'
require_relative 'mixin_modifies'

module Voom
  module Presenters
    module DSL
      module Components
        # Base class used by toggle classes
        class ToggleBase < Base
          include MixinLink
          include MixinModifies
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
