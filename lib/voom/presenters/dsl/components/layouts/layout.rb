module Voom
  module Presenters
    module DSL
      module Components
        module Layouts
          class Layout < Base
            attr_accessor :name, :content

            def initialize(content:, **attribs, &block)
              @content = content
              @name = attribs[:name]
              @header = nil
              @side_nav = nil
              @right_nav = nil
              super(type: :layout, **attribs, &block)
              expand!
            end

            def header(**attribs, &block)
              return @header if frozen?
              @header = Header.new(router: @router, context: @context,
                                   dependencies: @dependencies, helpers: @helpers, **attribs, &block)
            end

            def side_nav(**attribs, &block)
              return @side_nav if frozen?
              @side_nav = SideNav.new(router: @router, context: @context,
                                      dependencies: @dependencies, helpers: @helpers, **attribs, &block)
            end

            def right_nav(**attribs, &block)
              return @right_nav if frozen?
              @right_nav = RightNav.new(router: @router, context: @context,
                                       dependencies: @dependencies, helpers: @helpers, **attribs, &block)
            end

            # TODO
            # def footer(**attribs, &block)
            #   return @footer if frozen?
            #   @footer = Footer.new(router: @router, context: @context,
            #                        dependencies: @dependencies, helpers: @helpers, **attribs, &block)
            # end
            # TODO
            # def toolbar
            #   return @toolbar if frozen?
            #   @toolbar = Footer.new(router: @router, context: @context,
            #                        dependencies: @dependencies, helpers: @helpers, **attribs, &block)
            # end

          end
        end
      end
    end
  end
end



