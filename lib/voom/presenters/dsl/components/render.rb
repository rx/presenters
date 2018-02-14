module Voom
  module Presenters
    module DSL
      module Components
        module Render
          # Render another user_interface definition
          def render(user_interface, content: nil, **params)
            ui = Voom::Presenters[user_interface].call.render(router: router, content: content,
                                                      context: context.merge(params))
            @components += ui.components
          end
        end
      end
    end
  end
end
