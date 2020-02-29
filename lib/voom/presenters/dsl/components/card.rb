module Voom
  module Presenters
    module DSL
      module Components
        class Card < EventBase
          include Mixins::Common
          include Mixins::Attaches
          include Mixins::TextFields
          include Mixins::DateTimeFields
          include Mixins::Icons
          include Mixins::Selects
          include Mixins::Snackbars
          include Mixins::Chipset
          include Mixins::FileInputs
          include Mixins::Dialogs
          include Mixins::Progress

          attr_reader :height,
                      :width,
                      :selected,
                      :components,
                      :shows_errors,
                      :padding,
                      :hidden

          def initialize(**attribs_, &block)
            super(type: :card, **attribs_, &block)
            @height = attribs.delete(:height)
            @width = attribs.delete(:width)
            @selected = attribs.delete(:selected) {false}
            self.text(attribs.delete(:text)) if attribs.key?(:text)
            @shows_errors = attribs.delete(:shows_errors) {true}
            padding = attribs.delete(:padding) {:all}
            @padding = validate_padding(coerce_padding(padding)).uniq if padding != nil
            @hidden = attribs.delete(:hidden){false}

            @components = []
            expand!
          end

          def media(**attribs, &block)
            return @media if locked?
            @media = Media.new(parent: self,
                               **attribs, &block)
          end

          class Media < Base
            include Mixins::Attaches
            include Mixins::Common
            attr_reader :height, :width, :color, :hidden, :components

            def initialize(**attribs_, &block)
              super(type: :media, **attribs_, &block)
              @height = attribs.delete(:height)
              @width = attribs.delete(:width)
              @color = attribs.delete(:color)
              @hidden = attribs.delete(:hidden) {false}

              @components = []
              expand!
            end

            def title(*title, **attribs, &block)
              return @title if locked?
              @title = Typography.new(type: :headline,
                                      level: 6,
                                      parent: self,
                                      text: title,
                                      **attribs, &block)
            end

            def subtitle(*text, **attribs, &block)
              return @subtitle if locked?
              @subtitle = Components::Typography.new(parent: self, type: :subtitle, text: text, **attribs, &block)
            end

            def avatar(avatar = nil, **attribs, &block)
              return @avatar if locked?
              @avatar = Avatar.new(parent: self, avatar: avatar,
                                   **attribs, &block)
            end

            def image(image = nil, **attribs, &block)
              return @image if locked?
              @image = Image.new(parent: self, image: image, **attribs, &block)
            end

            def button(icon = nil, **attributes, &block)
              return @button if locked?
              @button = Components::Button.new(icon: icon, position: [:top, :right], parent: self, **attributes, &block)
            end
          end

          def text(*text, **attribs, &block)
            self << Typography.new(type: :body,
                                   parent: self, text: text, **attribs, &block)
          end

          def actions(**attribs, &block)
            return @actions if locked?
            @actions = Actions.new(parent: self,
                                   **attribs, &block)
          end

          class Actions < Base
            attr_accessor :buttons, :switches

            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              @buttons = []
              @switches = []
              expand!
            end

            def button(text = nil, **options, &block)
              @buttons << Components::Button.new(parent: self, text: text,
                                                 **options, &block)
            end

            def switch(text = nil, **options, &block)
              @switches << Components::Switch.new(parent: self, text: text,
                                                  **options, &block)
            end
          end

          private

          include Mixins::Padding
        end
      end
    end
  end
end
