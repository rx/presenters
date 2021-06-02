module Coprl
  module Presenters
    module DSL
      module Components
        class Dialog < EventBase
          include Mixins::Common
          include Mixins::Attaches
          include Mixins::Steppers
          include Mixins::Sliders
          include Mixins::Event
          include Mixins::Progress

          attr_accessor :percent_width,
                        :percent_height,
                        :px_width,
                        :px_height,
                        :buttons,
                        :components,
                        :shows_errors

          def initialize(**attribs_, &block)
            super(type: :dialog, **attribs_, &block)
            width = attribs.delete(:width)
            height = attribs.delete(:height)
            @percent_width = width&.end_with?("%") ? width : nil
            @percent_height = height&.end_with?("%") ? height : nil
            @px_width = !width&.end_with?("%") ? width : nil
            @px_height = !height&.end_with?("%") ? height : nil
            @shows_errors = attribs.delete(:shows_errors){true}

            @buttons = []
            @components=[]
            expand!
          end

          def title(*title, **options, &block)
            return @title if locked?
            @title = Components::Typography.new(parent: self, type: :title,
                                                text: title,
                                                                 **options, &block)
          end

          def heading(*text, **options, &block)
            components << Components::Typography.new(parent: self, type: :heading,
                                                     text: text,
                                                  **options, &block)
          end

          def body(*text, **options, &block)
            components << Components::Typography.new(parent: self, type: :body,
                                                     text: text,
                                                     **options, &block)
          end

          def actions(**attribs, &block)
            return @actions if locked?
            @actions = Actions.new(parent: self,
                                   **attribs, &block)
          end

          class Actions < Base
            attr_accessor :buttons

            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              @buttons = []
              expand!
            end

            def button(text = nil, **options, &block)
              @buttons << Components::Button.new(parent: self, text: text,
                                                 **options, &block)
            end
          end

        end
      end
    end
  end
end
