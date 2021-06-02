module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module Padding
            def coerce_padding(padding, default_level: 2)
              case padding
              when true, :full, :all
                [:"top#{default_level}", :"right#{default_level}", :"bottom#{default_level}", :"left#{default_level}"]
              when false, :none
                []
              else
                Array(padding).map do |item|
                  %i(top right bottom left).include?(item) ? :"#{item}#{default_level}" : item
                end
              end
            end

            def validate_padding(padding_)
              valid_padding = %i(top right bottom left
                                 top0 right0 bottom0 left0
                                 top1 right1 bottom1 left1
                                 top2 right2 bottom2 left2
                                 top3 right3 bottom3 left3)
              validation_msg = 'Padding must either be true or :full, :all, false or :none, '\
                             "or an array containing zero or more of the following: #{valid_padding.join(', ')}"
              if padding_.respond_to?(:pop)
                raise Errors::ParameterValidation, validation_msg if (padding_ - valid_padding).any?
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
