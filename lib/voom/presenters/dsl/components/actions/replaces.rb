require_dependency 'voom/presenters/dsl/components/actions/base'
require_dependency'voom/presenters/namespace'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Replaces < Actions::Base
            include Namespace

            def initialize(**attribs_, &block)
              super(type: :replaces, **attribs_, &block)
            end

            def url
              presenter = _expand_namespace_(options[:presenter], namespace)
              @parent.router.url(render: presenter, command: options[:path], context: params)
            end
          end
        end
      end
    end
  end
end
