require_relative 'mixins/event'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class IconBase < Base
          include Mixins::Event
          include Mixins::Tooltips
          attr_reader :icon, :color, :size

          def initialize(**attribs_, &block)
            super(type: :icon, context: context,
                  **attribs_, &block)
            @icon = attribs.delete(:icon)
            @color    = attribs.delete(:color)
            @size    = attribs.delete(:size)
          end
        end
      end
    end
  end
end
