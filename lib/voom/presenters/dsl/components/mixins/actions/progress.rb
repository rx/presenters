require 'voom/presenters/dsl/components/actions/progress'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Actions
            module Progress
              def progress(progress_bar_id, &block)
                Components::Actions::Progress.new(progress_bar_id, self, &block)
              end
            end
          end
        end
      end
    end
  end
end
