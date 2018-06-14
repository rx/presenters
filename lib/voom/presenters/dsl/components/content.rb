require_relative 'menu'
require_relative 'mixins/common'
require_relative 'mixins/event'
require_relative 'mixins/attaches'
require_relative 'mixins/text_fields'
require_relative 'mixins/selects'
require_relative 'mixins/snackbars'
require_relative 'mixins/date_time_fields'
require_relative 'mixins/images'

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

          attr_reader :hidden, :components, :shows_errors
         
          def initialize(**attribs_, &block)
            super(type: :content, **attribs_, &block)
            @components = []
            @hidden = attribs.delete(:hidden){false}
            @shows_errors = attribs.delete(:shows_errors){false}
            expand!
          end
        end
      end
    end
  end
end
