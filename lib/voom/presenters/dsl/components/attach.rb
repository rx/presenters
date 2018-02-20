module Voom
  module Presenters
    module DSL
      module Components
        module Attach
          # Render another user_interface definition
          def attach(presenter, **params, &yield_block)
            pom = Voom::Presenters[presenter].call.expand(router: router, context: context.merge(params), &yield_block)
            @header ||= pom.header
            @drawer ||= pom.drawer
            @footer ||= pom.footer
            @components += pom.components
            @dialogs += pom.dialogs if @dialogs
          end
        end
      end
    end
  end
end
