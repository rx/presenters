require 'voom/presenters/dsl/components/mixins/common'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'
require 'voom/presenters/dsl/components/mixins/chips'
require 'voom/presenters/dsl/components/mixins/selects'
require 'voom/presenters/dsl/components/mixins/icons'

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
            return @header if locked?
            @header = Row.new(parent: self, type: :header,
                              **attribs, &block)
          end

          def row(**attribs, &block)
            @rows << Row.new(parent: self, type: :row,
                             **attribs, &block)
          end

          # WIP
          # def pagination(**attribs, &block)
          #   @pagination = Pagination.new(parent: self,
          #                                context: context,
          #                                **attribs, &block)
          # end

          class Row < Base
            attr_accessor :columns, :color

            def initialize(type:, **attribs_, &block)
              super(type: type, **attribs_, &block)
              @columns = []
              @color = attribs.delete(:color)
              expand!
            end

            def column(value=nil, **attribs, &block)
              @columns << Column.new(parent: self, value: value,
                                     **attribs, &block)
            end

            class Column < EventBase
              include Mixins::Tooltips
              include Mixins::Chips
              include Mixins::Selects
              include Mixins::Icons

              attr_accessor :numeric, :color, :components

              def initialize(**attribs_, &block)
                super(type: :column, **attribs_, &block)
                value = attribs.delete(:value)
                @numeric = attribs.delete(:numeric){numeric?(value)}
                self.value(value) if value
                @color = attribs.delete(:color)
                @components = []
                expand!
              end

              def value(*value, **attribs, &block)
                return @value if locked?
                @numeric = numeric?(*value) if value.size ==1
                @value = Components::Typography.new(parent: self, type: :text, text: value, **attribs, &block)
              end

              private
              def numeric?(value)
                return true if value.is_a? Numeric
                (value.to_s.strip.sub(/\D/, '') =~ /^[\$]?[-+]?(,?[0-9])*\.?[0-9]+$/) != nil
              end
            end

          end
          # class Pagination < Base
          #   attr_accessor :page_size
          #
          #   def initialize(**attribs_, &block)
          #     super(type: :pagination, **attribs_, &block)
          #     @page_size = attribs.delete(:page_size)
          #     expand!
          #   end
          # end
        end
      end
    end
  end
end
