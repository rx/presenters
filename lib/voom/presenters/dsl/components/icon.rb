require_relative 'mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        class Icon < Base
          include Mixins::Event
          attr_accessor :icon, :color

          def initialize(**attribs_, &block)
            super(type: :icon, context: context,
                  **attribs_, &block)
            @icon = attribs.delete(:icon)
            @color    = attribs.delete(:color)
            expand!
          end
        end
      end
    end
  end
end
