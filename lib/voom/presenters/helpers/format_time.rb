require 'tzinfo'

module Voom
  module Presenters
    module Helpers
      module Time
        LONG_FORMAT='%m/%d/%Y %I:%M:%S %p %Z'
        SHORT_FORMAT='%d %b %H:%M %Z'

        def format_time(time, format: '%m/%d/%Y %I:%M:%S %p %Z', timezone: nil)
          return '' unless time
          time = time.in_time_zone(timezone) if timezone
          time.strftime(format)
        end

        def format_time_long(time, format: nil, timezone: nil)
          format_time(time, format: format||LONG_FORMAT, timezone: timezone)
        end

        def format_time_short(time, format: nil, timezone: nil)
          format_time(time, format: format||SHORT_FORMAT, timezone: timezone)
        end
      end
    end
  end
end

