module Voom
  module Presenters
    module DSL
      module Components
        class Table < Base
          include Mixins::Common
          include Mixins::Event
          attr_accessor :header, :rows, :selectable, :width, :border

          def initialize(**attribs_, &block)
            super(type: :table, **attribs_, &block)
            @selectable = attribs.delete(:selectable)
            @border = attribs.delete(:border){ true }
            @width = attribs.delete(:width)
            @rows = []
            expand!
          end

          def header(**attribs, &block)
            return @header if locked?
            @header = Row.new(parent: self, type: :header,
                              **attribs, &block)
          end

          def footer(**attribs, &block)
            return @footer if locked?
            @footer = Row.new(parent: self, type: :footer,
                              **attribs, &block)
          end

          def row(**attribs, &block)
            @rows << Row.new(parent: self, type: :row,
                             **attribs, &block)
          end

          def pagination(**attribs, &block)
            return @pagination if locked?
            @pagination = Pagination.new(parent: self,
                                         **attribs, &block)
          end

          class Row < Base
            attr_accessor :columns, :color, :checkbox

            def initialize(type:, **attribs_, &block)
              super(type: type, **attribs_, &block)
              @columns = []
              @color = attribs.delete(:color)
              self.checkbox(attribs.slice(:name, :value, :checked)) if @parent.selectable
              expand!
            end

            def column(value=nil, **attribs, &block)
              @columns << Column.new(parent: self, value: value,
                                     **attribs, &block)
            end

            def checkbox(**attributes, &block)
              return @checkbox if locked?
              field_name = @type == :header ? 'all' : "#{attributes.delete(:name)}[]"
              @checkbox = Components::Checkbox.new(parent: self,
                                                   name: field_name,
                                                   **attributes,
                                                   &block)
            end

            class Column < EventBase
              include Mixins::Tooltips
              include Mixins::Chipset
              include Mixins::Selects
              include Mixins::Icons
              include Mixins::Typography
              include Mixins::Content

              attr_accessor :numeric, :color, :components, :colspan

              def initialize(**attribs_, &block)
                super(type: :column, **attribs_, &block)
                value = attribs.delete(:value)
                @numeric = attribs.delete(:numeric){numeric?(value)}
                self.value(value) if value
                @color = attribs.delete(:color)
                @colspan = attribs.delete(:colspan)
                @components = []
                expand!
              end

              def value(*value, **attribs, &block)
                return @value if locked?
                @numeric = numeric?(*value) if value.size ==1 && !numeric
                @value = Components::Typography.new(parent: self, type: :text, text: value, **attribs, &block)
              end

              private
              def numeric?(value)
                return true if value.is_a? Numeric
                (value.to_s.strip.sub(/\D/, '') =~ /^[\$]?[-+]?(,?[0-9])*\.?[0-9]+$/) != nil
              end
            end

          end

          class Pagination < Base
            attr_accessor :page_size, :total, :current_page, :per_page, :previous_button, :next_button

            def initialize(**attribs_, &block)
              super(type: :pagination, **attribs_, &block)
              @page_size = attribs.delete(:page_size){10}.to_i
              @page_size_options = attribs.delete(:page_size_options){[10,20,30,40,50,100]}
              @total = attribs.delete(:total)
              @current_page = attribs.delete(:current_page){ 1 }.to_i
              @replace_id = attribs.delete(:replace_id)
              @replace_presenter = attribs.delete(:replace_presenter)
              previous_button_icon
              next_button_icon
              per_page_select
              range
              expand!
            end

            def range
              return @range if locked?
              end_range = @total - (@total - @page_size * @current_page.to_i)
              start_range = end_range - @page_size + 1
              @range = [start_range, end_range]
            end

            def previous_button_icon(icon = :keyboard_arrow_left)
              return @previous_button if locked?
              @previous_button = button(icon, [1, @current_page-1].max)
            end

            def next_button_icon(icon = :keyboard_arrow_right)
              return @next_button if locked?
              @next_button = button(icon, [total_pages, @current_page+1].min)
            end

            def per_page_select
              return @per_page if locked?
              @per_page = select(@page_size_options, @page_size, @total)
            end

            private

            def total_pages
              (@total.to_f / @page_size.to_f).ceil
            end

            def button(icon_name, page, replace_id = @replace_id, replace_presenter = @replace_presenter)
              __attribs__ = attribs.merge({page: page, page_size: @page_size})
              Components::Icon.new(parent: self, icon: icon_name) do
                event :click do
                   replaces replace_id, replace_presenter, __attribs__
                end
              end
            end

            def select(options, current_option, total_records, replace_id = @replace_id, replace_presenter = @replace_presenter)
              __attribs__ = attribs.reject{|key,val| [:page_size, :page].include? key }
              Components::Select.new(parent: self, name: :page_size, full_width: false) do
                options.each do |num|
                  option selected: (num == current_option) do
                    text num
                    value num
                  end
                  break if num > total_records
                end
                event :change do
                  replaces replace_id, replace_presenter, __attribs__.merge(page_size: context[:page_size])
                end
              end
            end

          end

        end
      end
    end
  end
end
