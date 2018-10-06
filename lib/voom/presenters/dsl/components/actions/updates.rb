require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Updates < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :update, **attribs_, &block)
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
