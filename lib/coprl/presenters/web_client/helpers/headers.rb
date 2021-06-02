module Coprl::Presenters::WebClient::Helpers
  module Headers
    include Coprl::Presenters::WebClient::Helpers::HtmlSafe

    def coprl_headers(base_url, request, pom)
      html_safe (<<~HEADERS)
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
        <link rel="stylesheet" href="#{ base_url }/#{ request.env['SCRIPT_NAME'] }bundle.css">
        <script defer src="#{ base_url }/#{ request.env['SCRIPT_NAME'] }bundle.js"></script>
        #{plugin_headers(pom)}
        #{custom_css(request.env['REQUEST_PATH'], base_url)}
        #{pom.csrf_meta_tags}
      HEADERS
    end

    def plugin_headers(pom)
      Coprl::Presenters::WebClient::PluginHeaders.new(pom: pom, render: method(:render_partial)).render
    end

    def custom_css(path, host=nil)
      root = Coprl::Presenters::Settings.config.presenters.root
      Coprl::Presenters::WebClient::CustomCss.new(path, root: root, host: host).render
    end

    def custom_js
      custom_js_path = Coprl::Presenters::Settings.config.presenters.web_client.custom_js
      Dir.glob(custom_js_path).map do |file|
        _build_script_tag_(file)
      end.join("\n") if custom_js_path
    end

    def _build_script_tag_(path)
      (<<~JS)
            <script defer src="#{env['SCRIPT_NAME']}#{path.sub('public/','')}"></script>
      JS
    end
  end
end
