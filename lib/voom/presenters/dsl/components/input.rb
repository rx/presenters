require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Input < EventBase
          include Mixins::Tooltips

          attr_reader :name,
                      :dirtyable,
                      :disabled

          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @name = attribs.delete(:name)
            @dirtyable = attribs.delete(:dirtyable) { true }
            @disabled = attribs.delete(:disabled) { false }
          end
        end
      end
    end
  end
end
