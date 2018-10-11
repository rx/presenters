require_dependency 'voom/presenters/dsl/components/mixins/event'
require_dependency 'voom/presenters/dsl/components/mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Input < EventBase
          include Mixins::Tooltips
          attr_reader :name

          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @name = attribs.delete(:name)
          end
        end
      end
    end
  end
end

