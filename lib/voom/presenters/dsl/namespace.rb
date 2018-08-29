module Voom
  module Presenters
    module DSL
      module Namespace
        def _expand_namespace_(presenter, namespace)
          presenter = presenter.to_s
          return namespace  if presenter.split(':').size > 1
          namespace.any? ? namespace.join(':')+':'+presenter : presenter
        end
      end
    end
  end
end
