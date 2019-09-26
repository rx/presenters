module Voom
  module Presenters
    module DSL
      module Components
        class ImageList < Base

          attr_reader :images, :width, :height

          def initialize(**attribs_, &block)
            super(type: :image_list, **attribs_, &block)
            @images = []
            @width = attribs_.delete(:width){ 60 }
            @height = attribs_.delete(:height){ 60 }
          end

          def image(image=nil, label=nil, **attribs, &block)
            @images << ImageListItem.new(parent: self,
                                         image: image,
                                         label: label,
                                         width: @width,
                                         height: @height,
                                         **attribs,
                                         &block)
          end

          class ImageListItem < Components::Image

            attr_reader :label

            def initialize(**attribs_, &block)
              super(type: :image_list_item, **attribs_, &block)
              @label = attribs_.delete(:label, nil)
            end

          end

        end
      end
    end
  end
end
