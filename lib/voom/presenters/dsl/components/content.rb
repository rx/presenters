require 'voom/presenters/dsl/components/menu'
require 'voom/presenters/dsl/components/mixins/common'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/attaches'
require 'voom/presenters/dsl/components/mixins/text_fields'
require 'voom/presenters/dsl/components/mixins/selects'
require 'voom/presenters/dsl/components/mixins/snackbars'
require 'voom/presenters/dsl/components/mixins/date_time_fields'
require 'voom/presenters/dsl/components/mixins/images'
require 'voom/presenters/dsl/components/mixins/steppers'
require 'voom/presenters/dsl/components/mixins/sliders'
require 'voom/presenters/dsl/components/mixins/chips'
require 'voom/presenters/dsl/components/mixins/icons'
require 'voom/presenters/dsl/components/mixins/dialogs'
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

          attr_reader :hidden, :float, :components, :shows_errors, :width, :position, :text_align

          def initialize(**attribs_, &block)
            super(type: :content, **attribs_, &block)
            @components = []
            @hidden = attribs.delete(:hidden){false}
            @float = attribs.delete(:float){false}
            @width = attribs.delete(:width){nil}
            @shows_errors = attribs.delete(:shows_errors){false}
            @position = Array(attribs.delete(:position)).compact
            @text_align = attribs.delete(:text_align){'left'}
            expand!
          end
        end
      end
    end
  end
end
