require_dependency 'voom/presenters/dsl/components/datetime_base'

module Voom
  module Presenters
    module DSL
      module Components
        class TimeField < DatetimeBase
          attr_reader :config

          def initialize(**attribs_, &block)
            super(type: :time, **attribs_, &block)
            map_config(:min_time, :min_date)
            map_config(:max_time, :max_date)
            merge_config(:time_24hr, true)

            expand!
          end
        end
      end
    end
  end
end

