module Voom::Presenters::WebClient::Helpers
  module HtmlSafe
    def html_safe(string)
      # This is for rails ... it requires that html safe strings be marked as safe
      string.respond_to?(:html_safe) ? string.html_safe : string
    end
  end
end
