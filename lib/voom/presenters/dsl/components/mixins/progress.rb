module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Content
            def content(**attributes, &block)
              self << Components::Content.new(parent: self, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
