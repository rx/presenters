module Coprl
  module Presenters
    module Helpers
      include Helpers::Time
      include Helpers::Date
      include Helpers::Redact
      if defined?(::Rails)
        include Coprl::Presenters::Helpers::Rails
      end
    end
  end
end
