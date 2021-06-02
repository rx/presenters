module Coprl::Presenters::WebClient::Helpers::Rails
  module Raw
    def raw(html_js_string)
      html_js_string.to_s.html_safe
    end
  end
end
