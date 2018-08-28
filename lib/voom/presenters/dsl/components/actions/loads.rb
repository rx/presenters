require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Loads < Base
            def initialize(**attribs_, &block)
              super(type: :loads, **attribs_, &block)
            end

            def url
              @parent.router.url(render: options[:presenter], command: options[:path], context: params)
            end
          end
        end
      end
    end
  end
end
