module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module Images
            def image(image=nil, **attribs, &block)
              self << Components::Image.new(parent: self, image: image, **attribs, &block)
            end
          end
        end
      end
    end
  end
end
