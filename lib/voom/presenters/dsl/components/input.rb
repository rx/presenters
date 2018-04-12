require_relative 'mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        class Input < Base
          include Mixins::Event
          attr_reader :name

          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @name = attribs.delete(:name)
          end
        end
      end
    end
  end
end

