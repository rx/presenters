require_dependency 'voom/presenters/dsl/components/hidden_field'
require_dependency 'voom/presenters/dsl/components/text_field'
require_dependency 'voom/presenters/dsl/components/text_area'
require_dependency 'voom/presenters/dsl/components/mixins/event'
require_dependency 'voom/presenters/dsl/components/mixins/grids'
require_dependency 'voom/presenters/dsl/components/mixins/append'
require_dependency 'voom/presenters/dsl/components/mixins/text_fields'
require_dependency 'voom/presenters/dsl/components/mixins/selects'
require_dependency 'voom/presenters/dsl/components/mixins/buttons'
require_dependency 'voom/presenters/dsl/components/mixins/toggles'
require_dependency 'voom/presenters/dsl/components/mixins/attaches'
require_dependency 'voom/presenters/dsl/components/mixins/expansion_panels'
require_dependency 'voom/presenters/dsl/components/mixins/content'
require_dependency 'voom/presenters/dsl/components/mixins/typography'
require_dependency 'voom/presenters/dsl/components/mixins/date_time_fields'

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
