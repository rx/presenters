require 'voom/presenters/dsl/components/hidden_field'
require 'voom/presenters/dsl/components/text_field'
require 'voom/presenters/dsl/components/text_area'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/grids'
require 'voom/presenters/dsl/components/mixins/append'
require 'voom/presenters/dsl/components/mixins/text_fields'
require 'voom/presenters/dsl/components/mixins/selects'
require 'voom/presenters/dsl/components/mixins/buttons'
require 'voom/presenters/dsl/components/mixins/toggles'
require 'voom/presenters/dsl/components/mixins/attaches'
require 'voom/presenters/dsl/components/mixins/expansion_panels'
require 'voom/presenters/dsl/components/mixins/content'
require 'voom/presenters/dsl/components/mixins/typography'
require 'voom/presenters/dsl/components/mixins/date_time_fields'
require 'voom/presenters/dsl/components/mixins/images'

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
          include Mixins::Images

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
