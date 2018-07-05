require_relative 'hidden_field'
require_relative 'text_field'
require_relative 'text_area'
require_relative 'mixins/event'
require_relative 'mixins/grids'
require_relative 'mixins/append'
require_relative 'mixins/text_fields'
require_relative 'mixins/selects'
require_relative 'mixins/buttons'
require_relative 'mixins/toggles'
require_relative 'mixins/attaches'
require_relative 'mixins/expansion_panels'
require_relative 'mixins/content'
require_relative 'mixins/typography'
require_relative 'mixins/date_time_fields'
require_relative 'mixins/steppers'

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
          include Mixins::Steppers

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
