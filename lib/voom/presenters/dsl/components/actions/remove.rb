require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Remove < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :remove, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
