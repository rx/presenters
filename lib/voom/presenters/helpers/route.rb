module Voom
  module Presenters
    module Helpers
      module Route
        def presenters_path(presenter, **params)
          router.url(render: presenter, context: params)
        end
      end
    end
  end
end
