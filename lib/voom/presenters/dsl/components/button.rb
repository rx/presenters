require_relative 'mixins/common'
require_relative 'mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        class Button < Base
          include Mixins::Event
          
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

          def event(event=nil, **params, &block)
            return @event if locked?
            @event = Components::Event.new(parent: self, event: event, context: params, &block)
          end
        end
      end
    end
  end
end
