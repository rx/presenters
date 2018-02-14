module Voom
  module Presenters
    module DSL
      module Components
        class Menu < Base
          attr_accessor :items

          def initialize(**attribs, &block)
            @items = []
            super(type: :menu, **attribs, &block)
            expand!
          end

          def item(first_text = nil, text: nil, entity: nil, **attribs, &block)
            the_text = first_text || text
            @items << Item.new(text: the_text, router: @router, context: @context,
                               entity: entity || @entity,
                               dependencies: @dependencies,
                               helpers: @helpers,
                               **attribs, &block)
          end

          def separator( **attribs, &block)
            @items << Separator.new(router: @router, context: @context,
                                    dependencies: @dependencies,
                                    helpers: @helpers,
                                    **attribs, &block)
          end

          class Item < Base
            attr_accessor :text, :icon

            def initialize(**attribs, &block)
              @text = attribs[:text]
              @icon = attribs[:icon]
              super(type: :item, **attribs, &block)
              expand!
            end
          end

          class Separator < Base
            def initialize(**attribs, &block)
              super(type: :separator, **attribs, &block)
            end
          end

        end
      end
    end
  end
end
