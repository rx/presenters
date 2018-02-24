require_relative 'mixin_link'

module Voom
  module Presenters
    module DSL
      module Components
        class Typography < Base
          include MixinLink

          attr_accessor :text, :level, :color

          def initialize(parent:, **attribs_, &block)
            super(type: :text, parent: parent, **attribs_, &block)
            @text = attribs.delete(:text)
            @level = attribs.delete(:level) || 1
            @color = attribs.delete(:color)
            expand!
          end
        end
      end
    end
  end
end
