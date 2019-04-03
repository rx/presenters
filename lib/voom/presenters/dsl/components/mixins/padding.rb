module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Padding
            def coerce_padding(padding)
              case padding
              when true, :full, :all
                [:top, :right, :bottom, :left]
              when false, :none
                []
              else
                Array(padding)
              end
            end

            def validate_padding(padding_)
              validation_msg = 'Padding must either be true or :full, :all, false or :none, '\
                             'or an array containing zero ore more of the following :top, :right, :bottom, :left!'
              if padding_.respond_to?(:pop)
                raise Errors::ParameterValidation, validation_msg if (padding_ - %i(top right bottom left)).any?
              else
                raise Errors::ParameterValidation, validation_msg unless padding_ === true ||
                    padding_ === false ||
                    %i(full none).include(padding_)
              end
              padding_
            end
          end
        end
      end
    end
  end
end
