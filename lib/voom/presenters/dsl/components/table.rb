require_relative 'common'

module Voom
  module Presenters
    module DSL
      module Components
        class Table < Base
          attr_accessor :header, :rows, :selectable

          def initialize(**attribs_, &block)
            super(type: :table, **attribs_, &block)
            @selectable = attribs.delete(:selectable)
            @rows = []
            expand!
          end

          def header(**attribs, &block)
            return @header if frozen?
            @header = Row.new(type: :header,
                              router: @router, context: @context,
                              dependencies: @dependencies,
                              helpers: @helpers, **attribs, &block)
          end

          def row(**attribs, &block)
            @rows << Row.new(type: :row, router: @router, context: @context,
                             dependencies: @dependencies,
                             helpers: @helpers, **attribs, &block)
          end

          class Row < Base
            attr_accessor :columns
            def initialize(type:, **attribs_, &block)
              super(type: type, **attribs_, &block)
              @columns = []
              expand!
            end

            def column(value=nil, **attribs, &block)
              @columns << Column.new(value: value,
                                     router: @router, context: @context,
                                     dependencies: @dependencies,
                                     helpers: @helpers, **attribs, &block)
            end

            class Column < Base
              attr_accessor :value, :numeric
              def initialize(**attribs_, &block)
                super(type: :column, **attribs_, &block)
                @value = attribs.delete(:value)
                @numeric = attribs.delete(:numeric) || numeric?
                expand!
              end

              private
              def numeric?
                return true if value.is_a? Numeric
                (value.to_s.sub(/\D/,'') =~ /^[-+]?[0-9]*\.?[0-9]+$/) != nil
              end
            end
          end
        end
      end
    end
  end
end
