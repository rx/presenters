require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Posts < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :post, **attribs_, &block)
            end

            def url
              @parent.router.url(render: options[:presenter], command: options[:path], context: {})
            end
          end
        end
      end
    end
  end
end
