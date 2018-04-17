require_relative 'mixins/common'
require_relative 'mixins/event'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Button < EventBase
          include Mixins::Tooltips
          BUTTON_TYPES = %i(raised flat fab icon)

          attr_accessor :text, :icon, :button_type, :color, :disabled, :size, :align

          def initialize(type: nil, **attribs_, &block)
            @button_type = h(type) || ((attribs_[:icon]&&!attribs_[:text]) ? :icon : nil) || :flat
            super(type: :button, **attribs_, &block)
            self.icon(attribs.delete(:icon)) if attribs.key?(:icon)
            @text = attribs.delete(:text)
            @color = attribs.delete(:color)
            @disabled = attribs.delete(:disabled) || false
            @size = attribs.delete(:size)
            @align = attribs.delete(:align)
            expand!
            @event_parent_id = self.parent(:form)&.id || id
          end

          def icon(icon=nil, **attribs, &block)
            return @icon if locked?
            @icon = Components::Icon.new(parent: self, icon: icon,
                                         context: context,
                                         **attribs, &block)

          end
        end
      end
    end
  end
end
