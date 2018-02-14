module Voom
  module Presenters
    module DSL
      module Components
        class Form < Base
          class Button < Base
            attr_accessor :text, :label, :icon

            def initialize(**attribs, &block)
              @label = attribs[:label]
              @icon = attribs[:icon]
              @text = attribs[:text]
              attribs[:type] ||= :button
              super(**attribs, &block)
              expand!
            end
          end
        end
      end
    end
  end
end
