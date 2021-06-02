require 'coprl/presenters/dsl/components/actions/base'

module Coprl
  module Presenters
    module DSL
      module Components
        module Actions
          class PostMessage < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :post_message, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
