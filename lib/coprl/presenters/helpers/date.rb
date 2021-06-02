module Coprl
  module Presenters
    module Helpers
      module Date
        LONG_FORMAT='%B %e, %Y'
        SHORT_FORMAT='%e %b'

        def format_date(date, format: LONG_FORMAT)
          date ? date.strftime(format) : ''
        end

        def format_date_long(time, format: nil)
          format_date(time, format: format||LONG_FORMAT)
        end

        def format_date_short(time, format: nil)
          format_date(time, format: format||SHORT_FORMAT)
        end
      end
    end
  end
end
