require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'
require 'voom/presenters/dsl/components/mixins/color'

module Voom
  module Presenters
    module DSL
      module Components
        class IconBase < EventBase
          include Mixins::Tooltips
          include Mixins::Color
          attr_reader :icon,
                      :color,
                      :size,
                      :position,
                      :hidden

          def initialize(**attribs_, &block)
            super(type: :icon,
                  **attribs_, &block)
            @icon     = attribs.delete(:icon)
            @color = validate_color(attribs.delete(:color) { nil })
            @size     = attribs.delete(:size){ :default }
            @position = Array(attribs.delete(:position)).compact
            @hidden = attribs.delete(:hidden) {false}
          end
        end
      end
    end
  end
end
