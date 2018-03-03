module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Helpers
            def helpers(module_=nil, &block)
              return unless module_ || block
              @parent.helpers(module_, &block) if @parent
              @helpers ||= Module.new
              @helpers.include module_ if module_
              @helpers.module_eval(&block) if block
              extend(@helpers)
            end
          end
        end
      end
    end
  end
end

