module Coprl::Presenters::WebClient::Helpers::Sinatra
  module EscapeHtml
    def h(text)
      # Note: Rails escapes html already. It is the opposite as Sinatra.
      # For the inverse see raw
      Rack::Utils.escape_html(text)
    end
  end
end
