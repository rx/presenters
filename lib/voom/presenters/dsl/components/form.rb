module Voom
  module Presenters
    module DSL
      module Components
        class Form < EventBase
          include Mixins::Append
          include Mixins::Grids
          include Mixins::TextFields
          include Mixins::DateTimeFields
          include Mixins::Selects
          include Mixins::Toggles
          include Mixins::Buttons
          include Mixins::Attaches
          include Mixins::ExpansionPanels
          include Mixins::Content
          include Mixins::Typography
          include Mixins::FileInputs

          attr_reader :components, :shows_errors

          def initialize(**attribs_, &block)
            super(type: :form, **attribs_, &block)
            @shows_errors = attribs.delete(:shows_errors){true}
            @components = []
            expand!
          end
        end
      end
    end
  end
end
