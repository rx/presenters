require_relative 'menu'
require_relative 'mixins/common'
require_relative 'mixins/event'
require_relative 'mixins/helpers'
require_relative 'mixins/attaches'
require_relative 'mixins/text_fields'

module Voom
  module Presenters
    module DSL
      module Components
        class Content < EventBase
          include Mixins::Common
          include Mixins::Helpers
          include Mixins::Attaches
          include Mixins::TextFields

          attr_reader :hidden, :components, :shows_errors
         
          def initialize(**attribs_, &block)
            super(type: :content, **attribs_, &block)
            @components = []
            @hidden = attribs.delete(:hidden){false}
            @shows_errors = attribs.delete(:shows_errors){true}
            expand!
          end
        end
      end
    end
  end
end
