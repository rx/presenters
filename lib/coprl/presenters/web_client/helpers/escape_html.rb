module Coprl::Presenters::WebClient::Helpers
  module EscapeHtml
    def h(text)
      Rack::Utils.escape_html(text)
    end
  end
end
