require_relative 'menu'
require_relative 'typography'
require_relative 'mixins/common'
require_relative 'mixins/event'
require_relative 'mixins/attaches'
require_relative 'mixins/avatar'
require_relative 'mixins/text_fields'
require_relative 'mixins/icons'

module Voom
  module Presenters
    module DSL
      module Components
        class Card < EventBase
          include Mixins::Common
          include Mixins::Attaches
          include Mixins::TextFields
          include Mixins::Icons

          attr_reader :height, :width, :selected, :components, :shows_errors


          def initialize(**attribs_, &block)
            super(type: :card, **attribs_, &block)
            @height = attribs.delete(:height)
            @width = attribs.delete(:width)
            @selected = attribs.delete(:selected) {false}
            self.text(attribs.delete(:text)) if attribs.key?(:text)
            @shows_errors = attribs.delete(:shows_errors){true}

            @components = []
            expand!
          end

          def media(**attribs, &block)
            return @media if locked?
            @media = Media.new(parent: self,
                               context: context,
                               **attribs, &block)
          end

          # def overflow_menu(**attribs, &block)
          #   return @overflow_menu if locked?
          #   icon = attribs.delete(:icon){:more_vert}
          #   position = attribs.delete(:position){ [:top, :right]}
          #   @overflow_menu = Components::Button.new(parent: self,
          #                                                    icon: icon,
          #                                                    position: position,
          #                                                    context: context,
          #                                                    **attribs, &block)
          # end

          class Media < Base
            include Mixins::Avatar
            attr_reader :height, :width, :color

            def initialize(**attribs_, &block)
              super(type: :media, **attribs_, &block)
              @height = attribs.delete(:height)
              @width = attribs.delete(:width)
              @color = attribs.delete(:color)

              expand!
            end

            def title(*title, **attribs, &block)
              return @title if locked?
              @title = Typography.new(type: :title,
                                      parent: self,
                                      text: title,
                                      context: context,
                                      **attribs, &block)
            end

            def image(image=nil, **attribs, &block)
              return @image if locked?
              @image = Image.new(parent: self, image: image, context: context, **attribs, &block)
            end

            def button(icon=nil, **attributes, &block)
              return @button if locked?
              @button = Components::Button.new(icon: icon, position:[:top, :right], parent: self, context: context, **attributes, &block)
            end
          end

          def text(*text, **attribs, &block)
            self << Typography.new(type: :body,
                                   parent: self, text: text, context: context, **attribs, &block)
          end

          def actions(**attribs, &block)
            return @actions if locked?
            @actions = Actions.new(parent: self,
                                   context: context,
                                   **attribs, &block)
          end

          class Actions < Base
            attr_accessor :buttons

            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              @buttons = []
              expand!
            end

            def button(text=nil, **options, &block)
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
