module Voom
  module Presenters
    module DSL
      module DependsOn
        include Symbol

        def depends_on(command, **options)
          return @dependencies if @dependencies
          @dependencies ||= []
          call_as = options[:as] || snake_case(command).to_sym
          @dependencies << { call_as => sym_to_str(command) }
        end
      end
    end
  end
end
