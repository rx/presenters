require_dependency 'voom/presenters/dsl/components/dialog'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Dialogs
            def dialog(**attributes, &block)
              @components << Components::Dialog.new(parent: self,
                                                    **attributes, &block)
            end
          end
        end
      end
    end
  end
end
