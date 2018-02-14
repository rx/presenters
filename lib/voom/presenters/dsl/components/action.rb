module Voom
  module Presenters
    module DSL
      module Components
        class Action < Base
          attr_accessor :text, :icon, :image, :label, :title

          def initialize(**attribs, &block)
            @text = attribs[:text]
            @icon = attribs[:icon]
            @image = attribs[:image]
            @label = attribs[:label]
            @title = attribs[:title]
            super(type: :action, **attribs, &block)
            expand!
          end
        end
      end
    end
  end
end
