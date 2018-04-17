module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Base < Components::Base
            attr_reader :params, :action_type

            def initialize(type:, **attribs_, &block)
              super(type: :action, **attribs_, &block)
              @action_type = type
              @params = attribs.delete(:params)
            end

            def url
              @parent.router.url(render: presenter, command: path, context: params)
            end

            def presenter
            end

            def path
            end
          end
        end
      end
    end
  end
end
