module Coprl::Presenters::WebClient::Helpers::Sinatra
  module Raw
    def raw(html_js_string)
      # Sinatra is raw/unsafe by default - this is the opposite of rails
      # For the inverse see escape_html
      html_js_string
    end
  end
end
