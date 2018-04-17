module Voom
  module Presenters
    module DSL
      module Components
        class Posts < PathBase
          def initialize(**attribs_, &block)
            super(action_type: :posts, **attribs_, &block)
          end
        end
      end
    end
  end
end
