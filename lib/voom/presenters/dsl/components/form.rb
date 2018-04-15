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
require_relative 'mixins/helpers'
require_relative 'mixins/expansion_panels'

module Voom
  module Presenters
    module DSL
      module Components
        class Form < Base
          include Mixins::Event
          include Mixins::Append
          include Mixins::Grids
          include Mixins::TextFields
          include Mixins::Selects
          include Mixins::Buttons
          include Mixins::Toggles
          include Mixins::Attaches
          include Mixins::Helpers
          include Mixins::ExpansionPanels

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
