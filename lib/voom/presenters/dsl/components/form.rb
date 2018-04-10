require_relative 'hidden_field'
require_relative 'text_field'
require_relative 'text_area'
require_relative 'mixins/event'
require_relative 'mixins/grid'
require_relative 'mixins/append'
require_relative 'mixins/text_fields'
require_relative 'mixins/buttons'
require_relative 'mixins/toggles'

module Voom
  module Presenters
    module DSL
      module Components
        class Form < Base
          include Mixins::Event
          include Mixins::Append
          include Mixins::Grid
          include Mixins::TextFields
          include Mixins::Buttons
          include Mixins::Toggles

          attr_reader :components

          def initialize(**attribs_, &block)
            super(type: :form, **attribs_, &block)
            @components = []
            expand!
          end
        end
      end
    end
  end
end
