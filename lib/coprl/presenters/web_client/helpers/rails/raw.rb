module Coprl::Presenters::WebClient::Helpers::Rails
  module Raw
    def raw(html_js_string)
      # Note Rails escapes by default ... Sinatra is the opposite
      # For the inverse see escape_html
      html_js_string.to_s.html_safe
    end
  end
end
