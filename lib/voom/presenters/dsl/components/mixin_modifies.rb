require_relative 'modifies'

module Voom
  module Presenters
    module DSL
      module Components
        module MixinModifies
          # Method can be one of :post, :put, :delete or :patch
          def posts(target=nil, **params, &block)
            return @modifies if locked?
            @modifies = Components::Modifies.new(parent: self, target: target, method: :post, context: params, &block)
          end

          def updates(target, **params, &block)
            return @modifies if locked?
            @modifies = Components::Modifies.new(parent: self, target: target, method: :put, context: params, &block)
          end

          def creates(target, **params, &block)
            posts(target, **params, &block)
          end

          def destroys(target, **params, &block)
            return @modifies if locked?
            @modifies = Components::Modifies.new(parent: self, target: target, method: :delete, context: params, &block)
          end

        end
      end
    end
  end
end
