module Coprl
  module Presenters
    module DSL
      module Components
        class Avatar < EventBase
          include Mixins::Tooltips

          attr_accessor :avatar, :color, :size, :position

          def initialize(**attribs_, &block)
            super(type: :avatar, **attribs_, &block)
            @avatar   = attribs.delete(:avatar)
            @color    = attribs.delete(:color)
            @size     = attribs.delete(:size){ :default }
            @position = Array(attribs.delete(:position)).compact
            expand!
          end
        end
      end
    end
  end
end
