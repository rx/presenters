require 'voom/presenters/views'

class CoprlTemplateHandler
  def call(template, source)
    erb = ActionView::Template.registered_template_handler(:erb)
    web_erb = File.read(Voom::Presenters::Views.web_erb_path)
    source = erb.call(template, web_erb)
    erb = ActionView::Template.registered_template_handler(:erb)
    web_erb = File.read(Voom::Presenters::Views.web_erb_path)
    source = erb.call(template, web_erb)
    # Magic -- we must return callable ruby -- by putting a begin and end block around the erb evalulation/call above it works.
    # Without the begin;;end -- no go
    <<-SOURCE
    begin
      presenter_name = local_assigns[:presenter] ? presenter : namespaced_presenter(params)
      presenter = Voom::Presenters::App[presenter_name].call
      context = params.dup
      router = Voom::Presenters::WebClient::Router.new(base_url: request.base_url)
      @pom = presenter.expand(router: router, context: context)
      #{source}
      end
    SOURCE
  end
end

ActiveSupport.on_load(:action_controller){ append_view_path(Voom::Presenters::Views.view_path) if respond_to?(:append_view_path) }
ActionView::Template.register_template_handler(:pom, CoprlTemplateHandler.new)
