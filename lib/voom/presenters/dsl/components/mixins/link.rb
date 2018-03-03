require_relative 'link'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Link
            def link(target=nil, **params, &block)
              return @link if locked?
              @link = Components::Link.new(parent: self, target: target, context: params, &block)
            end
          end
        end
      end
    end
  end
end
