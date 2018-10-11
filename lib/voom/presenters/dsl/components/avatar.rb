require 'voom/presenters/dsl/components/event_base'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Avatar < EventBase
          include Mixins::Tooltips

          attr_accessor :avatar, :color, :size, :position

          def initialize(**attribs_, &block)
            super(type: :avatar, **attribs_, &block)
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
