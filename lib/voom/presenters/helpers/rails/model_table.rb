module Voom
  module Presenters
    module Helpers
      module Rails
        module ModelTable
          # Build a a table from a Rails model
          def table_for(query_,
                        empty_icon: nil,
                        except: [:id, :created_at, :updated_at],
                        selectable: false, &block)
            row1 = query_.first
            if row1
              __columns__ = row1.class.columns
              table selectable: selectable do
                _table_header_(__columns__, except)

                query_.each do |item_|
                  row do
                    _table_row_(__columns__, block, except, item_)
                  end
                end
              end
            else
              body "You have no #{query_.arel_table.name.pluralize}", level: 2
              icon empty_icon, size: '10rem' if empty_icon
            end
          end


          private
          def _table_row_(__columns__, block, except, item_)
            __columns__.each do |col|
              next if except.include?(col.name.to_sym)
              column item_.send(col.name.to_sym) do
                self.instance_exec(item_, col.name.to_sym, &block) if block
              end
            end
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