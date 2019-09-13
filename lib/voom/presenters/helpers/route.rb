module Voom
  module Presenters
    module Helpers
      module Route
        include Namespace

        def presenters_path(presenter, host: false, **params)
          presenter = _expand_namespace_(presenter, namespace)
          presenter = presenter.gsub(':', '/')
          router.url(render: presenter, host: host, context: params)
        end

        alias presenter_path presenters_path

        # Full qualified URL
        def presenters_url(presenter, **params)
          presenters_path(presenter, host: true, **param)
        end

        alias presenter_url presenters_url
      end
    end
  end
end
