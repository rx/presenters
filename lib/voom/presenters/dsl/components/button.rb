require_relative 'mixins/common'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Button < EventBase
          include Mixins::Tooltips

          BUTTON_TYPES = %i(raised flat fab icon)

          attr_accessor :text, :icon, :button_type, :color, :disabled, :size, :position

          def initialize(type: nil, **attribs_, &block)
            @button_type = h(type) || ((attribs_[:icon]&&!attribs_[:text]) ? :icon : nil) || :flat
            super(type: :button, **attribs_, &block)
            self.icon(attribs.delete(:icon)) if attribs.key?(:icon)
            @text = attribs.delete(:text)
            @color = attribs.delete(:color)
            @disabled = attribs.delete(:disabled) || false
            @size = attribs.delete(:size)
            @position = Array(attribs.delete(:position)).compact
            expand!
            @event_parent_id = self.parent(:form)&.id || id
          end

          def icon(icon=nil, **attribs, &block)
            return @icon if locked?
            @icon = Components::Icon.new(parent: self, icon: icon,
                                         context: context,
                                         **attribs, &block)

          end

          def menu(**attributes, &block)
            return @menu if locked?
            @menu = Components::Menu.new(parent: self, position: menu_position, context: context, **attributes, &block)
          end

          private
          def menu_position
            position.include?(:right) ? :right : nil
          end
        end
      end
    end
  end
end
