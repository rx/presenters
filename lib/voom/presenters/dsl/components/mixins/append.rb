module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Append

            def <<(comp)
              @components << comp
            end

            def yield_to(&block)
              instance_eval(&block) if block
            end
          end
        end
      end
    end
  end
end
