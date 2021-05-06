module Voom::Presenters::WebClient::Helpers
  # Sinatra specific helpers
  module Sinatra
    include Voom::Presenters::WebClient::Helpers::Shared
    include LocalVariables
    include Partials
    include SafeMarkdown
  end
end
