module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Append

            def <<(comp)
              @components << comp
            end

            def yield_to(*args, &block)
              instance_exec(*args, &block) if block_given?
            end
          end
        end
      end
    end
  end
end
