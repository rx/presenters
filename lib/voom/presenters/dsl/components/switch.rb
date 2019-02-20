require 'voom/presenters/dsl/components/toggle_base'

module Voom
  module Presenters
    module DSL
      module Components
        class Switch < ToggleBase
          attr_accessor :on_value, :off_value
          def initialize(**attribs_, &block)
            super(type: :switch, **attribs_, &block)
            @on_value = attribs.delete(:on_value){ 'on' }
            @off_value = attribs.delete(:off_value){ nil }
            expand!
          end
        end
      end
    end
  end
end
