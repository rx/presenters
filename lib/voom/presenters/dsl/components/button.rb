module Voom
  module Presenters
    module DSL
      module Components
        class Button < Base
          attr_accessor :text, :label, :icon, :button_type, :color, :size

          def initialize(**attribs, &block)
            @label = attribs[:label]
            @icon = attribs[:icon]
            @text = attribs[:text]
            @color = attribs[:color] || :primary
            @button_type = attribs[:type] || :raised
            @size = attribs[:size] || (@button_type==:fab ? :lg : nil)
            attribs[:type] = :button
            super(**attribs, &block)
            expand!
          end
        end
      end
    end
  end
end
