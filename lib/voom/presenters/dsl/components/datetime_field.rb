require_dependency 'voom/presenters/dsl/components/datetime_base'

module Voom
  module Presenters
    module DSL
      module Components
        class DatetimeField < DatetimeBase
          attr_reader :config

          def initialize(**attribs_, &block)
            super(type: :datetime, **attribs_, &block)
            merge_config(:min_date)
            merge_config(:max_date)
            merge_config(:min_time)
            merge_config(:max_time)
            merge_config(:time_24hr, true)

            expand!
          end
        end
      end
    end
  end
end

