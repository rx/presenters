module Voom
  module Presenters
    module DSL
      module Components
        module Layouts
          class Header < Base
            attr_accessor :title, :image

            def initialize(**attribs, &block)
              @title = attribs[:title]
              @image = attribs[:image]
              super(type: :header, **attribs, &block)
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
