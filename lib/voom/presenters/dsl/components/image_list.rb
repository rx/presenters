module Voom
  module Presenters
    module DSL
      module Components
        class ImageList < Base

          attr_reader :images, :columns, :list_type

          def initialize(**attribs_, &block)
            super(type: :image_list, **attribs_, &block)
            @images = []
            @columns = attribs_.delete(:columns){ 5 }
            @list_type = attribs_.delete(:list_type){ 'standard' }
            @border_attribs = attribs_.slice(:border, :border_color, :border_radius)
            expand!
          end

          def image(image=nil, **attribs, &block)
            combined_attribs = attribs.merge(@border_attribs)
            @images << ImageListItem.new(parent: self,
                                         image: image,
                                         **combined_attribs,
                                         &block)
          end

          class ImageListItem < Components::Image

            attr_reader :label

            def initialize(**attribs_, &block)
              super(type: :image_list_item, **attribs_, &block)
              @label = attribs_.delete(:label){ nil }
              expand!
            end

          end

        end
      end
    end
  end
end
