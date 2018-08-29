require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Posts < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :post, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
