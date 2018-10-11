require_dependency 'voom/presenters/dsl/components/actions/base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Stepper < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :stepper, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
