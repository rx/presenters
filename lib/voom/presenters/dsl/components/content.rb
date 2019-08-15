module Voom
  module Presenters
    module DSL
      module Components
        class Content < EventBase
          include Mixins::Common
          include Mixins::Attaches
          include Mixins::TextFields
          include Mixins::DateTimeFields
          include Mixins::Selects
          include Mixins::Snackbars
          include Mixins::Steppers
          include Mixins::Sliders
          include Mixins::Chips
          include Mixins::Icons
          include Mixins::Dialogs
          include Mixins::FileInputs
          include Mixins::Avatar
          include Mixins::Progress

          attr_reader :hidden,
                      :float,
                      :components,
                      :shows_errors,
                      :width,
                      :height,
                      :position,
                      :text_align,
                      :padding,
                      :inline

          def initialize(**attribs_, &block)
            super(type: :content, **attribs_, &block)
            @components = []
            @hidden = attribs.delete(:hidden){false}
            @float = attribs.delete(:float){false}
            @width = attribs.delete(:width){nil}
            @height = attribs.delete(:height){nil}
            @shows_errors = attribs.delete(:shows_errors){false}
            @position = Array(attribs.delete(:position)).compact
            @text_align = attribs.delete(:text_align){'left'}
            padding = attribs.delete(:padding) {nil}
            @padding = validate_padding(coerce_padding(padding)).uniq if padding != nil
            @inline = attribs.delete(:inline){false}
            expand!
          end

          private
          include Mixins::Padding

        end
      end
    end
  end
end
