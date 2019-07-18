module Voom
  module Presenters
    module DSL
      module Components
        class Typography < EventBase
          include Mixins::Tooltips

          attr_accessor :text, :level, :color, :position, :inline, :markdown

          def initialize(parent:, level: nil, **attribs_, &block)
            super(type: :text, parent: parent, **attribs_, &block)
            @text = Array(attribs.delete(:text)||'').flatten.join("\n\n").split("\n\n")
            @level = level
            @color = attribs.delete(:color)
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
