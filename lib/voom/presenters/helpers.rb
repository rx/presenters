require 'voom/presenters/helpers/date'
require 'voom/presenters/helpers/time'
require 'voom/presenters/helpers/inflector'
require 'voom/presenters/helpers/errors'
require 'voom/presenters/helpers/redact'

module Voom
  module Presenters
    module Helpers
      include Helpers::Time
      include Helpers::Date
      include Helpers::Redact
      if defined?(::Rails)
        require 'voom/presenters/helpers/rails'
        include Voom::Presenters::Helpers::Rails
      end
    end
  end
end
