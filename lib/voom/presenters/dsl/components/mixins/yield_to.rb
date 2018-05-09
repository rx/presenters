module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module YieldTo
            def yield_to(&block)
              instance_eval(&block) if block
            end
          end
        end
      end
    end
  end
end
