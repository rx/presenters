require 'voom/presenters/dsl/components/actions/base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Deletes < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :delete, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
