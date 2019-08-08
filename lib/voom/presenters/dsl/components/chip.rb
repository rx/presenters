require 'voom/presenters/dsl/components/icon_base'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'
require 'voom/presenters/dsl/components/mixins/color'

module Voom
  module Presenters
    module DSL
      module Components
        class Chip < EventBase
          include Mixins::Tooltips
          include Mixins::Color

          attr_reader :icons, :color, :name, :value

          def initialize(**attribs_, &block)
            super(type: :chip,
                  **attribs_, &block)
            @icons = []
            self.text(attribs.delete(:text)) if attribs.key?(:text)
            self.icon(attribs.delete(:icon)) if attribs.key?(:icon)
            @color = validate_color(attribs.delete(:color) { nil })
            @name = attribs.delete(:name)
            @value = attribs.delete(:value)
            expand!
          end

          def text(*text, **attribs, &block)
            return @text if locked?
            @text = Components::Typography.new(parent: self, type: :text, text: text, **attribs, &block)
          end

          def icon(icon=nil, **attribs, &block)
            @icons << Icon.new(parent: self, icon: icon,
                               **attribs, &block)
          end

          def menu(**attributes, &block)
            return @menu if locked?
            @menu = Components::Menu.new(parent: self, **attributes, &block)
          end

          class Icon < Components::IconBase

            def initialize(**attribs_, &block)
              super(**attribs_, &block)
              @position = [:left] if position.empty?
              expand!
            end
          end
        end
      end
    end
  end
end
