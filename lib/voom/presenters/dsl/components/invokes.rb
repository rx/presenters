module Voom
  module Presenters
    module DSL
      module Components
        class Invokes < Base
          # attr_accessor :target, :method, :params
          
          def initialize(parent:, **params, &block)
            super(type: :invokes, parent: parent, &block)
            # @url = nil
            # @target = params.delete(:target)
            # @method = params.delete(:method)
            # @params = params[:context]
            expand!
          end

          def url
            # @parent.router.url(command: target, context: params)
          end
        end
      end
    end
  end
end
