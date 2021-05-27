module Coprl::Presenters::WebClient::Helpers::Rails
  module Partials
    # Called by built in views
    def partial(template, *args)
      options = args.last.is_a?(Hash) ? args.pop : {}
      options.merge!(partial: template)
      render options
    end

    # Called by plugins
    def render_partial(_engine, template, options = {}, locals = {}, &block)
      view_dir = options.fetch(:views, nil)
      if view_dir
        controller.class.append_view_path view_dir # controller.class.view_paths.find_all view_dir
        # self.class.append_view_path(view_dir) #unless self.class.view_paths.include? view_dir
      end
      options.merge!(partial: template.to_s)
      render options
    end
  end
end
