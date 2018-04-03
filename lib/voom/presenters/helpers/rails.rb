module Voom
  module Presenters
    module Helpers
      module Rails
        include ActionView::Helpers::AssetUrlHelper
        
        def default_url_options
          {}
        end

        def presenters_path(presenter, **params)
          path = voom_presenters_web_client_app_path(params)
          # replace last / with the presenter
          path.reverse.sub('/', "/#{presenter}".reverse).reverse
        end

        def table_for(query_, empty_icon: nil, except: [:id, :created_at, :updated_at], selectable: false,  &block)
           row1 = query_.first
           if row1
             __columns__ = row1.class.columns
             table selectable: selectable do
               header do
                 __columns__.each do |col|
                   column col.name.titleize unless except.include?(col.name.to_sym)
                 end
               end

               query_.each do |item_|
                 row do
                   __columns__.each do |col|
                     next if except.include?(col.name.to_sym)
                     column item_.send(col.name.to_sym) do
                       self.instance_exec(item_, col.name.to_sym, &block)if block
                     end
                   end
                 end
               end
             end

           else
             body "You have no #{query_.arel_table.name.pluralize}", level: 2
             icon empty_icon, size: '10rem' if empty_icon
           end
         end

      end
    end
  end
end
