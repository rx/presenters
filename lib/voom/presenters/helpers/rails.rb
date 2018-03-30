module Voom
  module Presenters
    module Helpers
      module Rails
        include ActionView::Helpers::AssetUrlHelper
        
        def default_url_options
          {}
        end

        def presenters_path(presenter, **params)
          path = voom_presenters_web_client_app_path(params)
          # replace last / with the presenter
          path.reverse.sub('/', "/#{presenter}".reverse).reverse
        end
      end
    end
  end
end
