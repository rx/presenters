module Voom
  module Presenters
    module DSL
      module Components
        module MethodMissing
          include Symbol
          def method_missing(method_sym, *_args, **options)
            super unless @dependencies
            if cmd = @dependencies.find { |dep| dep[method_sym] }
              cmd_to_call = Presenters.config.dependencies_container.resolve(cmd[method_sym])
              response = cmd_to_call.call(**options)
              response.data
            else
              raise "Method #{method_sym} not found!"
            end
          end
        end
      end
    end
  end
end
