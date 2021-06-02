module Coprl::Presenters::WebClient::Helpers
  module DragAndDrop
    def draggable_attributes(comp)
      draggable_attributes = ''
      if comp.draggable
        draggable_attributes = "draggable=true data-drag_params='#{comp.draggable.to_h.to_json}'"
      end
      draggable_attributes
    end

    def drop_zone_attributes(comp)
      drop_zone_attributes = ''
      if comp.drop_zone
        zone = comp.drop_zone[:zone]
        drop_zone_attributes = "data-dropzone='#{zone}' data-drop_params='#{comp.drop_zone.to_h.to_json}'"
      end
      drop_zone_attributes
    end
  end
end

