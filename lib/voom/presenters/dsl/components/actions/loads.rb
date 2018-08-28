require_relative 'base'
require 'voom/presenters/dsl/namespace'


module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Loads < Base
            include Namespace

            def initialize(**attribs_, &block)
              super(type: :loads, **attribs_, &block)
            end

            def url
              presenter = _expand_namespace_(options[:presenter], namespace)
              presenter = presenter.gsub(':','/')
              @parent.router.url(render: presenter, command: options[:path], context: params)
            end
          end
        end
      end
    end
  end
end
