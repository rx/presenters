require_dependency 'voom/presenters/helpers/date'
require_dependency 'voom/presenters/helpers/time'
require_dependency 'voom/presenters/helpers/inflector'
require_dependency 'voom/presenters/helpers/errors'

module Voom
  module Presenters
    module Helpers
      include Helpers::Time
      include Helpers::Date
      include Helpers::Errors
      if defined?(Rails)
        require_dependency 'voom/presenters/helpers/rails'
        include Voom::Presenters::Helpers::Rails
      end
    end
  end
end
