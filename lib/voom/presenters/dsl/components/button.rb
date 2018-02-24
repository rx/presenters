require_relative 'mixin_common'
require_relative 'mixin_post'

module Voom
  module Presenters
    module DSL
      module Components
        class Button < Base
          include MixinLink
          include MixinPost

          attr_accessor :text, :icon, :button_type, :color, :disabled, :size, :dialog

          def initialize(type: nil, **attribs_, &block)
            @button_type = h(type) || (attribs_[:icon] ? :icon : h(type)) || :flat
            super(type: :button, **attribs_, &block)
            @icon = attribs.delete(:icon)
            @text = attribs.delete(:text)
            @color = attribs.delete(:color)
            @disabled = attribs.delete(:disabled) || false
            @size = attribs.delete(:size)
            @dialog = attribs.delete(:dialog)
            expand!
          end
        end
      end
    end
  end
end
