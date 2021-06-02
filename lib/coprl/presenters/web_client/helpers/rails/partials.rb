module Coprl::Presenters::WebClient::Helpers::Rails
  module Partials
    # Called by built in views
    def partial(template, *args)
      options = args.last.is_a?(Hash) ? args.pop : {}
      options.merge!(partial: template)
      # Rails does not support the views parameter ... but sinatra does so we clean it up here
      options.delete(:views)
      render options
    end

    # Called by plugins
    def render_partial(_engine, template, options = {}, locals = {}, &block)
      # Rails does not support the views parameter ... but sinatra does so we clean it up here
      options.delete(:views)
      options.merge!(partial: template.to_s)
      render options
    end
  end
end
