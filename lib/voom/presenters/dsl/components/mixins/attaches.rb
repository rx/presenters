module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Attaches
            def attach(presenter, **context_, &yield_block)
              @_yield_block_ = yield_block
              pom = Voom::Presenters::App[presenter].call.expand_child(parent: self, context: context.merge(context_))
              @components += pom.components
            end
          end
        end
      end
    end
  end
end

