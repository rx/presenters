require_relative 'mixins/common'
require_relative 'mixins/attaches'
require_relative 'mixins/steppers'

module Voom
  module Presenters
    module DSL
      module Components
        class Dialog < Base
          include Mixins::Common
          include Mixins::Attaches
          include Mixins::Steppers

          attr_accessor :width, :height, :buttons, :components, :shows_errors

          def initialize(**attribs_, &block)
            super(type: :dialog, **attribs_, &block)
            @width = attribs.delete(:width)
            @height = attribs.delete(:height)
            @shows_errors = attribs.delete(:shows_errors){true}

            @buttons = []
            @components=[]
            expand!
          end

          def title(*title, **options, &block)
            return @title if locked?
            @title = Components::Typography.new(parent: self, type: :title,
                                                text: title, context: context,
                                                                 **options, &block)
          end

          def heading(*text, **options, &block)
            components << Components::Typography.new(parent: self, type: :heading,
                                                     text: text, context: context,
                                                  **options, &block)
          end

          def body(*text, **options, &block)
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
