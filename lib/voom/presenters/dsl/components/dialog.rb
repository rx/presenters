require_relative 'mixins/common'

module Voom
  module Presenters
    module DSL
      module Components
        class Dialog < Base
          include Mixins::Common
          attr_accessor :width, :height, :buttons, :components

          def initialize(**attribs_, &block)
            super(type: :dialog, **attribs_, &block)
            @width = attribs.delete(:width)
            @height = attribs.delete(:height)

            @buttons = []
            @components=[]
            expand!
          end

          def title(title=nil, **options, &block)
            return @title if locked?
            @title = Components::Typography.new(parent: self, type: :title,
                                                text: title, context: context,
                                                                 **options, &block)
          end

          def heading(text=nil, **options, &block)
            components << Components::Typography.new(parent: self, type: :heading,
                                                     text: text, context: context,
                                                  **options, &block)
          end

          def body(text=nil, **options, &block)
            components << Components::Typography.new(parent: self, type: :body,
                                                     text: text, context: context,
                                                     **options, &block)
          end

          def button(text=nil, **attribs, &block)
            @buttons << Button.new(parent: self, text: text,
                                   context: context,
                                   **attribs, &block)
          end
        end
      end
    end
  end
end
