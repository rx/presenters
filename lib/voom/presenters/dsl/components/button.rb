require 'voom/presenters/dsl/components/mixins/common'
require 'voom/presenters/dsl/components/mixins/tooltips'
require 'voom/presenters/dsl/components/mixins/padding'

module Voom
  module Presenters
    module DSL
      module Components
        class Button < EventBase
          include Mixins::Tooltips
          include Mixins::Padding

          BUTTON_TYPES = %i(raised flat fab icon)

          attr_accessor :text, :icon, :button_type, :color, :disabled, :size, :position, :full_width, :hidden, :wrap_text

          def initialize(type: nil, **attribs_, &block)
            @button_type = h(type) || ((attribs_[:icon] && !attribs_[:text]) ? :icon : nil) || :flat
            super(type: :button, **attribs_, &block)
            @color = attribs.delete(:color)
            self.icon(attribs.delete(:icon), color: color) if attribs.key?(:icon)
            @text = attribs.delete(:text)
            @disabled = attribs.delete(:disabled) {false}
            @hidden = attribs.delete(:hidden) {false}
            @size = attribs.delete(:size)
            @full_width = attribs.delete(:full_width) {false}
            @wrap_text = attribs.delete(:wrap_text) {true}
            @position = Array(default_position).compact
            expand!
            @event_parent_id = self.parent(:form)&.id || id
          end

          def icon(icon = nil, **attribs, &block)
            return @icon if locked?
            @icon = Components::Icon.new(parent: self, icon: icon, **attribs, &block)
          end

          def image(image = nil, **attribs, &block)
            return @image if locked?
            @image = Components::Image.new(parent: self, image: image, **attribs, &block)
          end

          def menu(**attributes, &block)
            return @menu if locked?
            @menu = Components::Menu.new(parent: self, position: menu_position, **attributes, &block)
          end

          private

          def default_position
            attribs.delete(:position){button_type == :fab ? %i(top right) : nil}
          end

          def menu_position
            position.include?(:right) ? :right : nil
          end
        end
      end
    end
  end
end
