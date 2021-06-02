module Coprl::Presenters::WebClient::Helpers::Sinatra
  module Partials
    # Called by built in views
    def partial(template, *args)
      template = _add_underscore(template)
      template = _add_application_dir(template) unless template.start_with?("components/") || template.start_with?("body/")
      options = args.last.is_a?(Hash) ? args.pop : {}
      options.merge!(:layout => false)
      erb(:"#{template}", options)
    end

    # Called by plugins
    def render_partial(engine, template, options = {}, locals = {}, &block)
      partial(template, options)
    end

    def _add_underscore(template)
      template_array = template.to_s.split('/')
      template_array[0..-2].join('/') + "/_#{template_array[-1]}"
    end

    def _add_application_dir(template)
      "application/#{template}"
    end

  end
end
