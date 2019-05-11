require 'voom/presenters/dsl/components/mixins/common'
require 'voom/presenters/dsl/components/mixins/images'
require 'voom/presenters/dsl/components/mixins/icons'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/attaches'
require 'voom/presenters/dsl/components/mixins/dialogs'
require 'voom/presenters/dsl/components/mixins/chips'
require 'voom/presenters/dsl/components/mixins/snackbars'
require 'voom/presenters/dsl/components/mixins/selects'
require 'voom/presenters/dsl/components/mixins/text_fields'
require 'voom/presenters/dsl/components/mixins/date_time_fields'
require 'voom/presenters/dsl/components/mixins/steppers'
require 'voom/presenters/dsl/components/mixins/sliders'
require 'voom/presenters/dsl/components/mixins/file_inputs'
require 'voom/presenters/dsl/components/mixins/avatar'
<<<<<<< Updated upstream
=======
require 'voom/presenters/dsl/components/mixins/padding'
require 'voom/presenters/dsl/components/mixins/progress'

>>>>>>> Stashed changes

module Voom
  module Presenters
    module DSL
      module Components
        module Padding
          def coerce_padding(padding)
            case padding
              when true, :full, :all
                [:top, :right, :bottom, :left]
              when false, :none
                []
              else
                Array(padding)
            end
          end

          def validate_padding(padding_)
            validation_msg = 'Padding must either be true or :full, :all, false or :none, '\
                             'or an array containing zero ore more of the following :top, :right, :bottom, :left!'
            if padding_.respond_to?(:pop)
              raise Errors::ParameterValidation, validation_msg if (padding_ - %i(top right bottom left)).any?
            else
              raise Errors::ParameterValidation, validation_msg unless padding_===true ||
                  padding_===false ||
                  %i(full none).include(padding_)
            end
            padding_
          end

        end
        class Grid < EventBase
          include Mixins::Attaches
          include Mixins::Dialogs
          include Mixins::Snackbars
          include Mixins::Progress

<<<<<<< Updated upstream
          attr_accessor :columns, :color, :padding, :wide
=======
          attr_reader   :columns,
                        :color,
                        :padding,
                        :wide,
                        :gutter
>>>>>>> Stashed changes

          def initialize(color: nil, **attribs_, &block)
            super(type: :grid, **attribs_, &block)
            @columns = []
            @color = h(color)
            padding = attribs.delete(:padding) {nil}
            @padding = validate_padding(coerce_padding(padding)).uniq if padding != nil
            @wide = attribs.delete(:wide) {false}
            expand!
          end

          def column(size, color: nil, **attribs, &block)
            attribs = size.respond_to?(:keys) ? attribs.merge(size) : attribs.merge(size: size)
            @columns << Column.new(parent: self, color: color,
                                   **attribs, &block)
          end

          private
          include Padding
          class Column < EventBase
            include Mixins::Common
            include Mixins::Icons
            include Mixins::Attaches
            include Mixins::Dialogs
            include Mixins::Chips
            include Mixins::TextFields
            include Mixins::DateTimeFields
            include Mixins::Selects
            include Mixins::Toggles
            include Mixins::Snackbars
            include Mixins::Steppers
            include Mixins::Sliders
            include Mixins::FileInputs
            include Mixins::Avatar
            include Mixins::Progress

<<<<<<< Updated upstream
            include Padding

            attr_reader :size, :desktop, :tablet, :phone, :color, :components, :padding
=======
            attr_reader :size,
                        :desktop,
                        :tablet,
                        :phone,
                        :color,
                        :components,
                        :padding,
                        :align,
                        :overflow
>>>>>>> Stashed changes

            def initialize(**attribs_, &block)
              super(type: :column, **attribs_, &block)
              @size = attribs.delete(:size) || 1
              @desktop = attribs.delete(:desktop)
              @tablet = attribs.delete(:tablet)
              @phone = attribs.delete(:phone)
              @color = attribs.delete(:color)
              @components = []
              padding = attribs.delete(:padding) {nil}
              @padding = validate_padding(coerce_padding(padding)).uniq if padding != nil
              expand!
            end

          end
        end
      end
    end
  end
end
