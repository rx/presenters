module Voom
  module Presenters
    module DSL
      module Components
        module Layouts
          class RightNav < Base
            
            def initialize(**attribs, &block)
              super(type: :side_nav, **attribs, &block)
              expand!
            end

            def menu(entity: nil, **attribs, &block)
              return @menu if frozen?
              @menu = Menu.new(router: @router, context: @context, entity: entity || @entity,
                               dependencies: @dependencies,
                               helpers: @helpers, **attribs, &block)
              @components = [@menu]
            end
          end
        end
      end
    end
  end
end
