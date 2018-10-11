require_relative '../../helpers/errors'
require_relative 'button'

module Voom
  module Presenters
    module DSL
      module Components
        class Stepper < Base
          attr_reader :steps, :orientation, :linear
          VALID_ORIENTATIONS = [:vertical, :horizontal]

          def initialize(**attribs_, &block)
            super(type: :stepper, **attribs_, &block)
            @orientation = attribs.delete(:orientation) {:horizontal}
            raise_parameter_validation "Invalid Orientation Type specified: #{orientation}" unless VALID_ORIENTATIONS.include? orientation
            @linear = attribs.delete(:linear) {true}
            @steps = []
            expand!
          end

          def step(text = nil, **attribs, &block)
            @steps << Step.new(parent: self, text: text, **attribs, &block)
          end

          class Step < Components::Content
            attr_accessor :components, :editable, :optional, :selected

            def initialize(**attribs_, &block)
              super(type: :step, **attribs_, &block)
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
