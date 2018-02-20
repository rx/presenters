module Voom
  module Presenters
    module DSL
      module Components
        module Render
          # Render another user_interface definition
          def render(user_interface, content: nil, **params)
            ui = Voom::Presenters[user_interface].call.render(router: router, content: content,
                                                      context: context.merge(params))
            @header ||= ui.header
            @drawer ||= ui.drawer
            @footer ||= ui.footer
            @components += ui.components
            @dialogs += ui.dialogs
          end
        end
      end
    end
  end
end
