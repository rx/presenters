module Voom
  module Presenters
    module Helpers
      module Rails
        module ModelTable
          # Build a a table from a Rails model
          def table_for(query_,
                        empty_icon: 'far fa-folder-open fa-rotate-180',
                        except: [:id, :created_at, :updated_at],
                        timezone: nil, # The timezone to covnert _at and _on values
                        selectable: false, &block)
            row1 = query_.first
            if row1
              __columns__ = row1.class.columns
              table selectable: selectable do
                _table_header_(__columns__, except)

                query_.each do |item_|
                  row do
                    _table_row_(__columns__, block, except, item_, timezone: timezone)
                  end
                end
              end
            else
              icon empty_icon, size: '6rem' if empty_icon
              body "You have no #{query_.arel_table.name.pluralize.humanize}"
            end
          end


          private
          def _table_row_(__columns__, block, except, item_, timezone: nil)
            __columns__.each do |col|
              next if except.include?(col.name.to_sym)
                value = format_value(col.name,item_.send(col.name.to_sym), timezone: timezone)
              column value do
                self.instance_exec(item_, col.name.to_sym, &block) if block
              end
            end
          end

          def format_value(col_name, value, timezone:)
            return format_time_long(value, timezone: timezone) if timezone &&
                col_name.ends_with?('_at') || col_name.ends_with?('_on')
            value
          end

          def _table_header_(__columns__, except)
            header do
              __columns__.each do |col|
                column col.name.titleize unless except.include?(col.name.to_sym)
              end
            end
          end
        end

      end
    end
  end
end