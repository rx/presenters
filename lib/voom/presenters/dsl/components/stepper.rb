require_relative '../../helpers/errors'
require_relative 'mixins/common'
require_relative 'mixins/images'
require_relative 'mixins/icons'
require_relative 'mixins/event'
require_relative 'mixins/attaches'
require_relative 'mixins/dialogs'
require_relative 'mixins/chips'
require_relative 'mixins/snackbars'
require_relative 'mixins/selects'
require_relative 'mixins/text_fields'
require_relative 'mixins/date_time_fields'
require_relative 'form'

module Voom
  module Presenters
    module DSL
      module Components
        class Stepper < Base
          attr_reader :steps, :orientation, :linear
          VALID_ORIENTATIONS = [:vertical, :horizontal]

          def initialize(**attribs_, &block)
            super(type: :stepper, context: context, **attribs_, &block)
            @orientation = attribs.delete(:orientation) {:horizontal}
            raise_parameter_validation "Invalid Orientation Type specified: #{orientation}" unless VALID_ORIENTATIONS.include? orientation
            @linear = attribs.delete(:linear) {true}
            @steps = []
            expand!
          end

          def horizontal?
            @orientation == :horizontal
          end


          def step(text = nil, **attribs, &block)
            @steps << Step.new(parent: self, context: context, text: text, **attribs, &block)
          end

          class Step < Form
            include Mixins::Common
            include Mixins::Images
            include Mixins::Icons
            include Mixins::Attaches
            include Mixins::Dialogs
            include Mixins::Chips
            include Mixins::TextFields
            include Mixins::DateTimeFields
            include Mixins::Selects
            include Mixins::Toggles
            include Mixins::Snackbars

            attr_accessor :components, :editable, :optional, :selected

            def initialize(context:, **attribs_, &block)
              super(type: :step, context: context, **attribs_, &block)
              @editable = attribs.delete(:editable) {true}
              @optional = attribs.delete(:optional) {false}
              @selected = attribs.delete(:selected) {false}
              @components = []
              expand!
            end

            def label(text = nil)
              return @label if locked?
              @label = text
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

              def continue(text = 'Continue', **options, &block)
                button(text, :next, **options, &block)
              end
              alias :next :continue

              def back(text = 'Back', **options, &block)
                button(text, :back, **options, &block)
              end

              def skip(text = 'Skip', **options, &block)
                button(text,:skip, **options, &block)
              end

              def cancel(text = 'Cancel', **options, &block)
                button(text,:cancel, **options, &block)
              end

              private

              def button(text = nil, stepper_type, **options, &block)
                btn = StepperButton.new(stepper_type, parent: self, text: text,
                                                   context: context,
                                                   **options, &block)

                btn.instance_eval do
                  event :click do
                    stepper stepper_type
                  end
                end
                @buttons << btn
              end

              class StepperButton < Components::Button
                attr_reader :stepper_type
                def initialize(stepper_type, **attribs_, &block)
                  @stepper_type = stepper_type
                  super(**attribs_, &block)
                end
              end


            end

          end

        end
      end
    end
  end
end
