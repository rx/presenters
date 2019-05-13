module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Progress
            def progress(**attributes, &block)
              return @progress if locked?
              @progress = Components::Progress.new(parent: self, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
