require 'voom/presenters/views'

class CoprlTemplateHandler
  if Rails.version.starts_with?('5')
    def call(template)
      erb = ActionView::Template.registered_template_handler(:erb)
      web_erb = File.read(Voom::Presenters::Views.web_erb_path)
      template = ActionView::Template.new(web_erb, Voom::Presenters::Views.web_erb, erb, {})
      source = erb.call(template)
      presenter_template(source)
    end
  else ## Rails 6 and greater
    def call(template, _source)
      erb = ActionView::Template.registered_template_handler(:erb)
      web_erb = File.read(Voom::Presenters::Views.web_erb_path)
      source = erb.call(template, web_erb)
      presenter_template(source)
    end
  end

  def presenter_template(source)
    # Magic -- we must return callable ruby -- by putting a begin and end block around the erb evalulation/call above it works.
    # Without the begin;;end -- no go
    <<-SOURCE
      begin
      unless @pom
        # if we are called as a partial fetch the presenter name passed 
        # otherwise we need to get the presenter name built from params
        presenter_name = local_assigns[:presenter] ? presenter : namespaced_presenter(params)
        presenter = Voom::Presenters::App[presenter_name].call
        context = params.dup
        router = Voom::Presenters::WebClient::Router.new(base_url: request.base_url)
        @pom = presenter.expand(router: router, context: context)
      end
      #{source}
      end
    SOURCE
  end
end

ActiveSupport.on_load(:action_controller){ append_view_path(Voom::Presenters::Views.view_path) if respond_to?(:append_view_path) }
ActionView::Template.register_template_handler(:pom, CoprlTemplateHandler.new)
