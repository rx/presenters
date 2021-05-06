module Voom::Presenters::WebClient::Helpers::Sinatra
  module SafeMarkdown
    include Voom::Presenters::WebClient::Helpers::Markdown
    # Called by built in views
    def markdown(string)
      # Sinatra does not need a safe_html call it defaults to safe_html
      base_markdown(string)
    end
  end
end
