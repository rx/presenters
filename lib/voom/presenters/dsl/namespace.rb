module Voom
  module Presenters
    module DSL
      module Namespace
        def _expand_namespace_(presenter, namespace)
          presenter = presenter.to_s
          presenter = namespace.join(':')+presenter unless presenter.split(':').size > 1
          presenter
        end
      end
    end
  end
end
