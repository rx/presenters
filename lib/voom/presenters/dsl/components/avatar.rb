require 'voom/presenters/dsl/components/event_base'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'
require 'voom/presenters/dsl/components/mixins/color'

module Voom
  module Presenters
    module DSL
      module Components
        class Avatar < EventBase
          include Mixins::Tooltips
          include Mixins::Color

          attr_accessor :avatar,
                        :color,            # icon color - no-op for images
                        :background_color, # translucent images and icon avatars
                        :size,
                        :position

          def initialize(**attribs_, &block)
            super(type: :avatar, **attribs_, &block)
            @avatar   = attribs.delete(:avatar)
            @color = validate_color(attribs.delete(:color) { nil })
            @background_color = validate_color(attribs.delete(:background_color) { nil })
            @size     = attribs.delete(:size){ :default }
            @position = Array(attribs.delete(:position)).compact
            expand!
          end
        end
      end
    end
  end
end
