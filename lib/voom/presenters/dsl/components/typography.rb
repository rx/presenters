require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Typography < EventBase
          include Mixins::Tooltips

          attr_accessor :text, :level, :color, :position

          def initialize(parent:, level: nil, **attribs_, &block)
            super(type: :text, parent: parent, **attribs_, &block)
            @text = Array(attribs.delete(:text)||'').flatten.join("\n\n").split("\n\n")
            @level = level
            @color = attribs.delete(:color)
            @position = Array(attribs.delete(:position)).compact
            expand!
          end

          def icon(icon=nil, **attribs, &block)
            return @icon if locked?
            @icon = Components::Icon.new(parent: self, icon: icon,
                                         **attribs, &block)
          end
        end
      end
    end
  end
end
