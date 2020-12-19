module Voom
  module Presenters
    module WebClient
      # This class renders custom CSS for the layout
      # It looks for public/presenters/global.css first
      # It then looks for public/presenters/#{env['REQUEST_PATH']}.css
      class CustomCss

        attr_reader :path, :root, :host
        private :path, :root, :host

        def initialize(path, root:, host:)
          @path = path
          @root = root
          @host = host
        end

        def render
          return unless custom_css_path
          [global_css, global_namespace_css(path), presenter_css(path)].join
        end

        private

        def custom_css_path
          Presenters::Settings.config.presenters.web_client.custom_css
        end

        # loads a global css file - by default located at `public/presenters/global.css`
        def global_css
          css_file = File.join(custom_css_path, 'global.css')
          full_path = File.join(root, css_file)
          _build_css_link_(css_file) if File.exists?(full_path)
        end

        def global_namespace_css(path)
          return unless custom_css_path && path
          namespace_path = path.split('/').reject { |c| c.empty? }.first
          css_file = File.join(custom_css_path, namespace_path ? namespace_path : '')
          css_file = File.join(css_file, 'global.css')
          full_path = File.join(root, css_file)
          trace {"Loading global namespace: #{full_path}"}
          _build_css_link_(css_file) if File.exists?(full_path)
        end

        # loads a custom css file that matches the presenter namespace/presenter.css
        # by default located at public/presenters/#{namespace}/#{presenter}.css
        def presenter_css(path)
          return unless custom_css_path && path
          css_file = File.join(custom_css_path, path)
          css_file = File.join(css_file, 'index') if path == '/'
          css_file = "#{css_file}.css"
          full_path = File.join(root, css_file)
          _build_css_link_(css_file) if File.exists?(full_path)
        end

        def _build_css_link_(path)
          (<<~CSS)
            <link rel="stylesheet" type="text/css" href="#{host}/#{path.sub('public/', '')}">
          CSS
        end
      end
    end
  end
end
