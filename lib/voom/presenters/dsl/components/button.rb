require_relative 'mixins/common'
require_relative 'mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        class Button < Base
          include Mixins::Event
          BUTTON_TYPES = %i(raised flat fab icon)
          
          attr_accessor :text, :icon, :button_type, :color, :disabled, :size, :dialog, :align
         
          def initialize(type: nil, **attribs_, &block)
            @button_type = h(type) || ((attribs_[:icon]&&!attribs_[:text]) ? :icon : nil) || :flat
            super(type: :button, **attribs_, &block)
            icon = attribs.delete(:icon)
            @icon = icon ? Icon.new(parent: self, icon: icon,
                                           context: context,
                                           **attribs, &block) : nil
            @text = attribs.delete(:text)
            @color = attribs.delete(:color)
            @disabled = attribs.delete(:disabled) || false
            @size = attribs.delete(:size)
            @dialog = attribs.delete(:dialog)
            @align = attribs.delete(:align)
            expand!
            @event_parent_id = self.parent(:form)&.id || id
          end
        end
      end
    end
  end
end
