module Voom
  module Presenters
    module DSL
      module Components
        class Header < Base
          attr_accessor :title, :image

          def initialize(**attribs_, &block)
            super(type: :header, **attribs_, &block)
            @title = attribs.delete(:title)
            @image = attribs.delete(:image)
            expand!
          end

          def menu(**attribs, &block)
            return @menu if frozen?
            @menu = Menu.new(router: @router, context: @context,
                             dependencies: @dependencies,
                             helpers: @helpers, **attribs, &block)
          end

        end
      end
    end
  end
end
