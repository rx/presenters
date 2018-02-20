require_relative 'menu'

module Voom
  module Presenters
    module DSL
      module Components
        class Card < Base
          attr_accessor :height, :width, :color

          def initialize(**attribs_, &block)
            super(type: :card, **attribs_, &block)
            @height = attribs.delete(:height)
            @width = attribs.delete(:width)
            @color = attribs.delete(:color)
            expand!
          end

          def title(title=nil, **attribs, &block)
            return @title if frozen?
            @title = Title.new(text: title, router: @router, context: @context,
                               dependencies: @dependencies,
                               helpers: @helpers,
                               **attribs, &block)
          end

          def text(text=nil)
            return @text if frozen?
            @text = text
          end

          def image(image=nil)
            return @image if frozen?
            @image = image
          end

          def background(image=nil, options: 'center / cover', **attribs, &block)
            return @bg_image if frozen?
            @bg_image = Background.new(image: image,
                                       options: options,
                                       router: @router, context: @context,
                                    dependencies: @dependencies,
                                    helpers: @helpers,
                                    **attribs, &block)
          end

          def action(**attribs, &block)
            return @action if frozen?
            @action = Action.new(router: @router, context: @context,
                                 dependencies: @dependencies,
                                 helpers: @helpers,
                                 **attribs, &block)
          end

          def menu(**attribs, &block)
            return @menu if frozen?
            icon = attribs[:icon] || :more_vert
            @menu = Components::Menu.new(icon: icon, router: @router, context: @context,
                             dependencies: @dependencies,
                             helpers: @helpers,
                             **attribs, &block)
          end

          class Background < Base
            attr_accessor :image, :options, :color

            def initialize(**attribs_, &block)
              super(type: :background, **attribs_, &block)
              @image = attribs.delete(:image)
              @options = attribs.delete(:options)
              @color = attribs.delete(:color)
              expand!
            end
          end


          class Title < Base
            attr_accessor :text, :color, :align

            def initialize(**attribs_, &block)
              super(type: :title, **attribs_, &block)
              @text = (attribs.delete(:text)||'').split("\n")
              @color = attribs.delete(:color)
              @align = attribs.delete(:align) || :bottom
              expand!
            end
          end

          class Action < Base
            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              expand!
            end

            def button(text=nil, **options, &block)
              return @button if frozen?
              @button = Components::Button.new(text: text, router: router, context: context,
                                               dependencies: @dependencies, helpers: @helpers, **options, &block)
            end
          end
        end
      end
    end
  end
end
