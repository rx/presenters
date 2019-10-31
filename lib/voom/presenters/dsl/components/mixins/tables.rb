module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Tables
            def table(**attributes, &block)
              self << Components::Table.new(parent: self, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
