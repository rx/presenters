require_relative 'mixins/common'
require_relative 'mixins/attaches'
require_relative 'mixins/steppers'
require_relative 'mixins/sliders'

module Voom
  module Presenters
    module DSL
      module Components
        class Dialog < Base
          include Mixins::Common
          include Mixins::Attaches
          include Mixins::Steppers
          include Mixins::Sliders

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

          def button(text=nil, **attribs, &block)
            @buttons << Button.new(parent: self, text: text,
                                   **attribs, &block)
          end
        end
      end
    end
  end
end
