if defined?(Rails)
  require_relative 'rails/currency'
  require_relative 'rails/model_table'

  module Voom
    module Presenters
      module Helpers
        module Rails
          include ActionView::Helpers::AssetUrlHelper
          include Voom::Presenters::Helpers::Rails::Currency
          include Voom::Presenters::Helpers::Rails::ModelTable
          def default_url_options
            {}
          end

          def presenters_path(presenter, **params)
            path = voom_presenters_web_client_app_path(params)
            if path.include?('?')
              path = path.sub('?', "#{presenter}?")
            else
              path = "#{path}/" unless path.end_with?('/')
              # replace last / with the presenter
              path = path.reverse.sub('/', "/#{presenter}".reverse).reverse
            end
            path
          end
        end
      end
    end
  end
end