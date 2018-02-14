module Voom
  module Presenters
    module Helpers
      module Date
        def format_date(date, format: '%m/%d/%Y')
          date ? date.strftime(format) : ''
        end
      end
    end
  end
end
