require_relative 'mixins/event'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class IconBase < EventBase
          include Mixins::Tooltips
          attr_reader :icon, :color, :size, :position

          def initialize(**attribs_, &block)
            super(type: :icon, context: context,
                  **attribs_, &block)
            @icon = attribs.delete(:icon)
            @color    = attribs.delete(:color)
            @size    = attribs.delete(:size)
            @position    = Array(attribs.delete(:position)).compact
          end
        end
      end
    end
  end
end
