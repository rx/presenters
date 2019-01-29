module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module ImageCrops
            def image_crop(**attribs, &block)
              self << Components::ImageCrop.new(parent: self,
                                                **attribs, &block)
            end
          end
        end
      end
    end
  end
end
