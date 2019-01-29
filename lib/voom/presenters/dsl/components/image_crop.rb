module Voom
  module Presenters
    module DSL
      module Components
        class ImageCrop < Image
          def initialize(**attribs_, &block)
            super(type: :image_crop, **attribs_, &block)
          end
        end
      end
    end
  end
end