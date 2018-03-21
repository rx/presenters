require_relative '../event'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Grid
            def grid(color: nil, **attributes, &block)
              self << Components::Grid.new(parent: self, color: color, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
