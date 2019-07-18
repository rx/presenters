module Voom
  module Presenters
    module Plugins
      module GoogleMaps
          module DSLComponents
            def google_map(**attributes, &block)
              self << GoogleMap.new(parent: self, **attributes, &block)
            end
          end
        module WebClientComponents
          def render_google_map(comp,
                                render:,
                                components:,
                                index:)
            view_dir = File.join(__dir__, 'google_maps')
            render.call :erb, :google_map, views: view_dir,
                        locals: {comp: comp,
                                 components: components, index: index}
          end
        end
      end
    end
  end
end
