require 'voom/presenters/dsl/components/actions/base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Resets < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :resets, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
