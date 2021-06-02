module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module YieldTo
            def yield_to(*args, &block)
              instance_exec(*args, &block) if block_given?
            end
          end
        end
      end
    end
  end
end
