module Voom::Presenters::WebClient::Helpers
  # Helpers used in both rails and sinatra
  module Shared
    include FormHelpers
    include PaddingHelpers
    include ExpandHash
    include RenderComponent
    include Inflector
    include Color
    include Headers
    include Equal
    include EscapeHtml
    include Includes
    include UniqueId
    include SnakeToCamel
    include DragAndDrop
    include TransformHash
  end
end
