module Voom::Presenters::WebClient::Helpers
  # Sinatra specific helpers
  module Rails
    include Voom::Presenters::WebClient::Helpers::Shared
    include LocalVariables
    include Partials
    include SafeMarkdown
    include Namespaced
  end
end
