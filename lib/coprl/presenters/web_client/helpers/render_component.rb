module Coprl::Presenters::WebClient::Helpers
  module RenderComponent
    def render_component(scope, comp, components, index)
      Coprl::Presenters::WebClient::ComponentRenderer.new(comp,
                                                          render: method(:render_partial),
                                                          scope: scope,
                                                          components: components,
                                                          index: index).render
    end
  end
end
