require 'voom/presenters/dsl/components/actions/base'
require'voom/presenters/namespace'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Replaces < Actions::Base
            include Namespace

            attr_reader :insert

            def initialize(**attribs_, &block)
              super(type: :replaces, **attribs_, &block)
              @insert = attribs.delete(:insert){false}
            end

            def url
              presenter = _expand_namespace_(options[:presenter], namespace)
              @parent.router.url(render: presenter, context: params)
            end
          end
        end
      end
    end
  end
end
