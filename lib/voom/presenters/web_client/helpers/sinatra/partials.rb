module Voom::Presenters::WebClient::Helpers::Sinatra
  module Partials

    def _add_underscore(template)
      template_array = template.to_s.split('/')
      template_array[0..-2].join('/') + "/_#{template_array[-1]}"
    end

    # Called by built in views
    def partial(template, *args)
      template = _add_underscore(template)
      options = args.last.is_a?(Hash) ? args.pop : {}
      options.merge!(:layout => false)
      erb(:"#{template}", options)
    end

    # Called by plugins
    def render_partial(engine, template, options = {}, locals = {}, &block)
      template = _add_underscore(template)
      render(engine, :"#{template}", options, locals, &block)
    end
  end
end
