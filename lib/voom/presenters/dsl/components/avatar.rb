require_relative 'event_base'
require_relative 'mixins/event'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Avatar < EventBase
          include Mixins::Tooltips

          attr_accessor :avatar, :color, :size, :position

          def initialize(**attribs_, &block)
            super(type: :avatar, context: context,
                  **attribs_, &block)
            @avatar = attribs.delete(:avatar)
            @color = attribs.delete(:color)
            @size = attribs.delete(:size)
            @position    = Array(attribs.delete(:position)).compact
            expand!
          end
        end
      end
    end
  end
end
