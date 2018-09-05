module Voom
  module Presenters
    module Namespace
      def _expand_namespace_(presenter, namespace)
        presenter = presenter.to_s
        return presenter if presenter.split(':').size > 1
        return presenter if presenter.split('/').size > 1
        namespace.any? ? namespace.join(':')+':'+presenter : presenter
      end
    end
  end
end
