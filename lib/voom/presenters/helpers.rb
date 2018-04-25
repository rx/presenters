require_relative 'helpers/date'
require_relative 'helpers/time'
require_relative 'helpers/inflector'
require_relative 'helpers/errors'

module Voom
  module Presenters
    module Helpers
      include Helpers::Time
      include Helpers::Date
      include Helpers::Errors
      if defined?(Rails)
        require_relative 'helpers/rails'
        include Voom::Presenters::Helpers::Rails
      end
    end
  end
end
