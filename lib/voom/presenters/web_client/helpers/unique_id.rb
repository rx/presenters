module Voom::Presenters::WebClient::Helpers
  module UniqueId
    def unique_id(comp)
      "#{comp.id}-#{SecureRandom.hex(4)}"
    end
  end
end
