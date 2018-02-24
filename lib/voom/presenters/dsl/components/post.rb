module Voom
  module Presenters
    module DSL
      module Components
        class Post < Base
          attr_accessor :target
          attr_accessor :params
          
          def initialize(parent:, **params, &block)
            super(type: :link, parent: parent, &block)
            @url = nil
            @target = params.delete(:target)
            @params = params[:context]
            expand!
          end

          def url
            @parent.router.url(render: target, context: params)
          end
        end
      end
    end
  end
end
