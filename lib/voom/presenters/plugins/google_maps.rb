require_relative 'google_maps/google_map'
module Voom
  module Presenters
    module Plugins
      module GoogleMaps
        module DSLMethods
          def google_map(**attributes, &block)
            self << GoogleMap.new(parent: self, **attributes, &block)
          end
        end
        module WebClient
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
