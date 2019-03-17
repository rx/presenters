require 'voom/presenters/namespace'

module Voom
  module Presenters
    module Helpers
      module Route
        include Namespace

        def presenters_path(presenter, **params)
          presenter = _expand_namespace_(presenter, namespace)
          presenter = presenter.gsub(':','/')
          router.url(render: presenter, context: params)
        end
        alias presenter_path presenters_path
      end
    end
  end
end
