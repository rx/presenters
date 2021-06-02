module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module ImageLists
            def image_list(**attribs, &block)
              self << Components::ImageList.new(parent: self, **attribs, &block)
            end
          end
        end
      end
    end
  end
end
