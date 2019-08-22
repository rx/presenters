if defined?(Rails)
  require 'voom/presenters/helpers/rails/currency'
  require 'voom/presenters/helpers/rails/model_table'
  require 'voom/presenters/namespace'

  module Voom
    module Presenters
      module Helpers
        module Rails
          include ActionView::Helpers::AssetUrlHelper
          include Voom::Presenters::Helpers::Rails::Currency
          include Voom::Presenters::Helpers::Rails::ModelTable
          include Namespace

          def default_url_options
            {}
          end

          def presenters_path(presenter, host: false, **params)
            presenter = _expand_namespace_(presenter, namespace)
            presenter = presenter.gsub(':', '/')

            path = voom_presenters_web_client_app_url(params, host: router.base_url)
            if path.include?('?')
              path = path.sub('?', "#{presenter}?")
            else
              path = "#{path}/" unless path.end_with?('/')
              # replace last / with the presenter
              path = path.reverse.sub('/', "/#{presenter}".reverse).reverse
            end
            path
          end

          alias presenter_path presenters_path

          def presenters_url(presenter, host: true, **params)
            presenters_path(presenter, host: host, **params)
          end

          alias presenter_url presenters_url
        end
      end
    end
  end
end
