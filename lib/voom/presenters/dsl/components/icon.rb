require_relative 'mixins/event'
require_relative 'mixins/tooltips'
require_relative 'icon_base'

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
