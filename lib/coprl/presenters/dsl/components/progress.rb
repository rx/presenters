module Coprl
  module Presenters
    module DSL
      module Components
        class Progress < Base
          attr_reader :hidden, :position

          def initialize(**attribs_, &block)
            super(type: :progress, **attribs_, &block)
            @hidden = attribs.delete(:hidden) {true}
            @position = attribs.delete(:position) {:top}
            validate_position(@position)
          end

          private

          def validate_position(position)
            unless (Array(position) - %i(top bottom both)).empty?
              raise(Errors::ParameterValidation,
                    "Position (#{position}) must be either :top, :bottom or :both")
            end
          end
        end
      end
    end
  end
end
