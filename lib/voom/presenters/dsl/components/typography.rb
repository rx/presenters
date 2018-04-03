require_relative 'mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        class Typography < Base
          include Mixins::Event

          attr_accessor :text, :level, :color

          def initialize(parent:, **attribs_, &block)
            super(type: :text, parent: parent, **attribs_, &block)
            @text = Array(attribs.delete(:text)||'').join("\n")
            @level = attribs.delete(:level) || 1
            @color = attribs.delete(:color)
            expand!
          end
        end
      end
    end
  end
end
