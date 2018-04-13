require_relative 'mixins/event'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Icon < Base
          include Mixins::Event
          include Mixins::Tooltips
          attr_accessor :icon, :color, :size

          def initialize(**attribs_, &block)
            super(type: :icon, context: context,
                  **attribs_, &block)
            @icon = attribs.delete(:icon)
            @color    = attribs.delete(:color)
            @size    = attribs.delete(:size)
            expand!
          end
        end
      end
    end
  end
end
