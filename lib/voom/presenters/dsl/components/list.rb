module Voom
  module Presenters
    module DSL
      module Components
        class List < Base
          
          def initialize(**attribs, &block)
            @lines = nil
            super(type: :list, **attribs, &block)
            expand!
          end

          def lines
            @components
          end

          def line(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @components << Line.new(text: the_text, router: @router, context: @context,
                               dependencies: @dependencies, helpers: @helpers, **attribs, &block)
          end
          
          class Line < Base
            attr_accessor :text, :icon, :image, :actions

            def initialize(**attribs, &block)
              @text = attribs[:text]
              @icon = attribs[:icon]
              @image = attribs[:image]
              @actions = []
              super(type: :line, **attribs, &block)
              expand!
            end

            def subtitle(first_text = nil, text: nil, entity: nil, **attribs, &block)
              return @subtitle if frozen?
              the_text = first_text || text
              @subtitle = Subtitle.new(text: the_text,
                                       entity: entity || @entity,
                                       router: @router,
                                       context: @context,
                                       dependencies: @dependencies,
                                       helpers: @helpers,
                                       **attribs, &block)
            end

            def detail(first_text = nil, text: nil, entity: nil, **attribs, &block)
              return @detail if frozen?
              the_text = first_text || text
              @detail = Detail.new(text: the_text,
                                   entity: entity || @entity,
                                   router: @router,
                                   context: @context,
                                   dependencies: @dependencies,
                                   helpers: @helpers,
                                   **attribs, &block)
            end

            def action(first_text = nil, text: nil, entity: nil, **attribs, &block)
              the_text = first_text || text
              @actions << LineAction.new(text: the_text, entity: entity || @entity, router: @router, context: @context,
                                         dependencies: @dependencies,
                                         helpers: @helpers,
                                         **attribs, &block)
            end

            class Subtitle < Base
              attr_accessor :text

              def initialize(**attribs, &block)
                @text = attribs[:text]
                super(type: :line, **attribs, &block)
                expand!
              end
            end

            class Detail < Base
              attr_accessor :text

              def initialize(**attribs, &block)
                @text = attribs[:text]
                super(type: :line, **attribs, &block)
                expand!
              end
            end

            class LineAction < Action
              def initialize(**attribs, &block)
                super(**attribs, &block)
                expand!
              end

              def menu(entity: nil, **attribs, &block)
                return @menu if frozen?
                @menu = Menu.new(router: @router, context: @context, entity: entity || @entity,
                                 dependencies: @dependencies,
                                 helpers: @helpers, **attribs, &block)
              end

            end
          end
        end
      end
    end
  end
end
