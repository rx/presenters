require 'voom/presenters/dsl/components/mixins/padding'

module Voom
  module Presenters
    module DSL
      module Components
        class Separator < Base
          attr_reader :padding, :dense

          def initialize(**attribs_, &block)
            super(type: :separator, **attribs_, &block)
            padding = attribs.delete(:padding) {:full}
            @padding = validate_padding(coerce_padding(padding)).uniq if padding != nil
            @dense = attribs.delete(:dense) { true }
            expand!
          end

          private
          include Mixins::Padding
        end
      end
    end
  end
end
