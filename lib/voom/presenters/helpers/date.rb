module Voom
  module Presenters
    module Helpers
      module Date
        LONG_FORMAT='%m/%d/%Y'
        SHORT_FORMAT='%d %b %Y'

        def format_date(date, format: '%m/%d/%Y')
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
