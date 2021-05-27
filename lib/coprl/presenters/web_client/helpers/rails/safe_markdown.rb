module Coprl::Presenters::WebClient::Helpers::Rails
  module SafeMarkdown
    include Coprl::Presenters::WebClient::Helpers::Markdown
    # Called by built in views
    def markdown(string)
      base_markdown(string).html_safe
    end
  end
end
