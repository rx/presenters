require 'voom/presenters/dsl/components/base'

module Voom
  module Presenters
    module DSL
      module Components
        class Progress < Base
          attr_reader :hidden, :position

          def initialize(**attribs_, &block)
            super(type: :progress, **attribs_, &block)
            @hidden = attribs.delete(:hidden) {true}
            @position = attribs.delete(:position) {:top}
            raise(Errors::ParameterValidation, "Position (#{@position}:#{Array(@position)-%i(top bottom both)}) must be either :top, :bottom or :both") unless (Array(@position)-%i(top bottom both)).empty?
          end
        end
      end
    end
  end
end
