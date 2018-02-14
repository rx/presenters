require_relative 'helpers/format_date'
require_relative 'helpers/format_time'
module Voom
  module Presenters
    module Helpers
      include Time
      include Date
    end
  end
end