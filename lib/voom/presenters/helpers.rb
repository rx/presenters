require_relative 'helpers/date'
require_relative 'helpers/time'
require_relative 'helpers/inflector'

module Voom
  module Presenters
    module Helpers
      include Helpers::Time
      include Helpers::Date
      if defined?(Rails)
        require_relative 'helpers/rails'
        include Voom::Presenters::Helpers::Rails
      end
    end
  end
end
