module Voom
  module Presenters
    module DSL
      module Components
        class Dialog < Base
          attr_accessor :title, :buttons, :components

          def initialize(title: nil, **attribs_, &block)
            super(type: :dialog, **attribs_, &block)
            @title = h(title)
            @buttons = []
            @components=[]
            expand!
          end

          def title(title=nil)
            return @title if locked?
            @title = title
          end

          def heading(text=nil, **options, &block)
            components << Components::Display.new(parent: self, text: text, **options, &block)
          end

          def paragraph(text=nil, **options, &block)
            components << Components::Typography.new(parent: self, text: text, **options, &block)
          end

          def button(text=nil, **attribs, &block)
            @buttons << Button.new(parent: self, text: text,
                                  **attribs, &block)
          end
        end
      end
    end
  end
end
