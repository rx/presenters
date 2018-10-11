require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'
require 'voom/presenters/dsl/components/icon_base'

module Voom
  module Presenters
    module DSL
      module Components
        class Icon < IconBase
          include Mixins::Tooltips

          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            expand!
          end
        end
      end
    end
  end
end
