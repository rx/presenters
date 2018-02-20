require_relative 'typography'

module Voom
  module Presenters
    module DSL
      module Components
        class Title < Typography
          def initialize(**attribs_, &block)
            super(type: :title, **attribs_, &block)
            expand!
          end
        end
      end
    end
  end
end
