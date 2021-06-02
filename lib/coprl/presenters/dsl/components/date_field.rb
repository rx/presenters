require 'coprl/presenters/dsl/components/datetime_base'

module Coprl
  module Presenters
    module DSL
      module Components
        class DateField < DatetimeBase
          DEFAULT_HINT = 'Enter date as MM/DD/YYYY'
          DEFAULT_ERROR = "Invalid date. #{DEFAULT_HINT}"

          attr_reader :config

          def initialize(**attribs_, &block)
            super(type: :date, **attribs_, &block)
            merge_config(:min_date)
            merge_config(:max_date)
            unless @picker
              @hint ||= DEFAULT_HINT
              @validation_error ||= DEFAULT_ERROR
            end
            expand!
          end

          def validation_error(error=nil)
            return @validation_error if locked?
            @validation_error ||= error
          end

        end
      end
    end
  end
end

