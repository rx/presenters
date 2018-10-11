require_dependency 'voom/presenters/dsl/components/menu'
require_dependency 'voom/presenters/dsl/components/mixins/common'
require_dependency 'voom/presenters/dsl/components/mixins/event'
require_dependency 'voom/presenters/dsl/components/mixins/attaches'
require_dependency 'voom/presenters/dsl/components/mixins/text_fields'
require_dependency 'voom/presenters/dsl/components/mixins/selects'
require_dependency 'voom/presenters/dsl/components/mixins/snackbars'
require_dependency 'voom/presenters/dsl/components/mixins/date_time_fields'
require_dependency 'voom/presenters/dsl/components/mixins/images'
require_dependency 'voom/presenters/dsl/components/mixins/steppers'
require_dependency 'voom/presenters/dsl/components/mixins/sliders'
require_dependency 'voom/presenters/dsl/components/mixins/chips'
require_dependency 'voom/presenters/dsl/components/mixins/icons'
require_dependency 'voom/presenters/dsl/components/mixins/dialogs'

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
          include Mixins::Images
          include Mixins::Steppers
          include Mixins::Sliders
          include Mixins::Chips
          include Mixins::Icons
          include Mixins::Dialogs

          attr_reader :hidden, :float, :components, :shows_errors
         
          def initialize(**attribs_, &block)
            super(type: :content, **attribs_, &block)
            @components = []
            @hidden = attribs.delete(:hidden){false}
            @float = attribs.delete(:float){false}
            @shows_errors = attribs.delete(:shows_errors){false}
            expand!
          end
        end
      end
    end
  end
end
