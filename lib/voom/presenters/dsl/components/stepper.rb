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

module Voom
  module Presenters
    module DSL
      module Components
        class Stepper < Base
          include Mixins::Content
          include Mixins::Append
          include Mixins::Attaches

          attr_reader :steps, :horizontal, :linear
          attr_accessor :components
          
          def initialize(**attribs_, &block)
            super(type: :stepper, context: context, **attribs_, &block)
            @horizontal = attribs.delete(:horizontal) { false }
            @linear = attribs.delete(:linear) { false }
            @steps = []
            expand!
          end

          def step(text=nil, **attribs, &block)
            @steps << Step.new(parent:self, context: context, text: text, **attribs, &block)
          end

          class Step < EventBase
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


            attr_accessor :label, :components

            def initialize(context:, **attribs_, &block)
              super(type: :step, context: context, **attribs_, &block)
              @label = attribs.delete(:label){'Undefined Label'}
              @components = []
              expand!
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
end


