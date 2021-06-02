module Coprl::Presenters::WebClient::Helpers
  module Equal
    def eq(attrib, value)
      attrib.to_s == value.to_s
    end
  end
end
