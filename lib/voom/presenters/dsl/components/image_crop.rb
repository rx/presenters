module Voom
  module Presenters
    module DSL
      module Components
        class ImageCrop < Image
          attr_reader :crop_attrs

          def initialize(**attribs_, &block)
            super(type: :image_crop, **attribs_, &block)
            @crop_attrs = %w(crop_x crop_y crop_width crop_height)
          end
        end
      end
    end
  end
end