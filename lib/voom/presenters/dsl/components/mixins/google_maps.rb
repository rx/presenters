module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module GoogleMaps
            def google_map(**attributes, &block)
              self << Components::GoogleMap.new(parent: self, **attributes, &block)
            end
          end
        end
      end
    end
  end
end