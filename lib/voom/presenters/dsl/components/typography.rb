require_relative 'mixins/event'
require_relative 'mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Typography < EventBase
          include Mixins::Tooltips

          attr_accessor :text, :level, :color, :position

          def initialize(parent:, **attribs_, &block)
            super(type: :text, parent: parent, **attribs_, &block)
            @text = Array(attribs.delete(:text)||'').flatten.join("\n\n").split("\n\n")
            @level = attribs.delete(:level){1}
            @color = attribs.delete(:color)
            @position = Array(attribs.delete(:position)).compact
            expand!
          end
        end
      end
    end
  end
end
