require_relative 'menu'
require_relative 'mixins/common'
require_relative 'mixins/event'
require_relative 'mixins/helpers'
require_relative 'mixins/attaches'
require_relative 'mixins/avatar'

module Voom
  module Presenters
    module DSL
      module Components
        class Card < EventBase
          include Mixins::Common
          include Mixins::Helpers
          include Mixins::Attaches

          attr_accessor :height, :width, :color, :selected, :components

          def initialize(**attribs_, &block)
            super(type: :card, **attribs_, &block)
            @height = attribs.delete(:height)
            @width = attribs.delete(:width)
            @color = attribs.delete(:color)
            @selected = attribs.delete(:selected) || false
            self.text(attribs.delete(:text)) if attribs.key?(:text)
            self.title(attribs.delete(:title)) if attribs.key?(:title)
            self.image(attribs.delete(:image)) if attribs.key?(:image)
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
            @text = Array(text||'').compact.join("\n").split("\n")
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
            include Mixins::Avatar
            attr_accessor :text, :color, :align

            def initialize(**attribs_, &block)
              super(type: :title, **attribs_, &block)
              @text = Array(attribs.delete(:text)||'').compact.join("\n").split("\n")
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
              return @background if locked?
              @background = Background.new(parent: self, image: image,
                                         options: options,
                                         context: context,
                                         **attribs, &block)
            end
          end

          class Action < Base
            attr_accessor :buttons
            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              @buttons = []
              expand!
            end

            def button(text, **options, &block)
              @buttons << Components::Button.new(parent: self, text: text,
                                               context: context,
                                               **options, &block)
            end
          end
        end
      end
    end
  end
end
