require_relative 'post'

module Voom
  module Presenters
    module DSL
      module Components
        module MixinPost
          def post(target=nil, **params, &block)
            return @post if locked?
            @post = Components::Post.new(parent: self, target: target, context: params, &block)
          end
        end
      end
    end
  end
end
