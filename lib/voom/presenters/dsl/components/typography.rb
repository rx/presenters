require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'
require 'voom/presenters/dsl/components/mixins/color'

module Voom
  module Presenters
    module DSL
      module Components
        class Typography < EventBase
          include Mixins::Tooltips
          include Mixins::Color
          attr_accessor :text,
                        :level,
                        :color,
                        :position,
                        :inline,
                        :markdown

          def initialize(parent:, level: nil, **attribs_, &block)
            super(type: :text, parent: parent, **attribs_, &block)
            @text = Array(attribs.delete(:text)||'').flatten.join("\n\n").split("\n\n")
            @level = level
            @color = validate_color(attribs.delete(:color) { nil })
            @inline = attribs.delete(:inline) { false }
            @position = Array(attribs.delete(:position)).compact
            @markdown = attribs.delete(:markdown) { true }
            expand!
          end
        end
      end
    end
  end
end
