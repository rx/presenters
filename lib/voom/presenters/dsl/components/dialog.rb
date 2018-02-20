module Voom
  module Presenters
    module DSL
      module Components
        class Dialog < Base
          attr_accessor :title, :buttons

          def initialize(title: nil, **attribs_, &block)
            super(type: :dialog, **attribs_, &block)
            @title = h(title)
            @buttons = []
            expand!
          end

          def title(title=nil)
            return @title if frozen?
            @title = title
          end

          def heading(text=nil, **options, &block)
            components << Components::Display.new(text: text, router: router, context: context,
                                                  dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def paragraph(text=nil, **options, &block)
            components << Components::Typography.new(text: text, router: router, context: context,
                                                    dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def button(text=nil, **attribs, &block)
            @buttons << Button.new(text: text, router: @router, context: @context,
                                  dependencies: @dependencies,
                                  helpers: @helpers,
                                  **attribs, &block)
          end
        end
      end
    end
  end
end
