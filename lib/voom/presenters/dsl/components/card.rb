require_relative 'menu'
require_relative 'mixin_common'
require_relative 'mixin_link'


module Voom
  module Presenters
    module DSL
      module Components
        class Card < Base
          include MixinLink
          include MixinCommon

          attr_accessor :height, :width, :color, :selected, :components

          def initialize(**attribs_, &block)
            super(type: :card, **attribs_, &block)
            @height = attribs.delete(:height)
            @width = attribs.delete(:width)
            @color = attribs.delete(:color)
            @selected = attribs.delete(:selected) || false
            @components = []
            expand!
          end

          def title(title=nil, **attribs, &block)
            return @title if locked?
            @title = Title.new(parent: self, text: title,
                               context: context,
                               **attribs, &block)
          end

          def text(text=nil)
            return @text if locked?
            @text = text
          end

          def image(image=nil, **attribs, &block)
            return @image if locked?
            @image = Image.new(parent: self, image: image, **attribs, &block)
          end

          def action(**attribs, &block)
            return @action if locked?
            @action = Action.new(parent: self,
                                 context: context,
                                 **attribs, &block)
          end

          def menu(**attribs, &block)
            return @menu if locked?
            icon = attribs[:icon] || :more_vert
            @menu = Components::Menu.new(parent: self, icon: icon,
                                         context: context,
                                         **attribs, &block)
          end

          def helpers(module_=nil, &block)
            return unless module_ || block
            @parent.helpers(module_, &block) if @parent
            @helpers ||= Module.new
            @helpers.include module_ if module_
            @helpers.module_eval(&block) if block
            extend(@helpers)
          end

          def attach(presenter, **context_, &yield_block)
            @_yield_block_ = yield_block
            pom = Voom::Presenters[presenter].call.expand_child(parent: self, context: context.merge(context_))
            @components += pom.components
          end

          class Background < Base
            attr_accessor :image, :options, :color

            def initialize(**attribs_, &block)
              super(type: :background, **attribs_, &block)
              @image = Image.new(parent: self, image: attribs.delete(:image), context: context)
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

            def button(text=nil, **options, &block)
              return @button if locked?
              @button = Components::Button.new(parent: self, text: text,
                                               context: context,
                                               **options, &block)
            end

            def background(image=nil, options: 'center / cover', **attribs, &block)
              return @bg_image if locked?
              @bg_image = Background.new(parent: self, image: image,
                                         options: options,
                                         context: context,
                                         **attribs, &block)
            end
          end

          class Action < Base
            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              expand!
            end

            def button(text=nil, **options, &block)
              return @button if locked?
              @button = Components::Button.new(parent: self, text: text,
                                               context: context,
                                               **options, &block)
            end
          end
        end
      end
    end
  end
end
