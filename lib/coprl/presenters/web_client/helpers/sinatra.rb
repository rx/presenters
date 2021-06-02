module Coprl::Presenters::WebClient::Helpers
  # Sinatra specific helpers
  module Sinatra
    include Coprl::Presenters::WebClient::Helpers::Shared
    include LocalVariables
    include Partials
    include SafeMarkdown
    include Raw
    include EscapeHtml
  end
end
