module Coprl::Presenters::WebClient::Helpers::Rails
  module EscapeHtml
    def h(text)
      # Rails escapes html already so we don't do it here. It is the opposite as Sinatra.
      # For the inverse see raw
      text
    end
  end
end
