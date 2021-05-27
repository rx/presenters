module Coprl::Presenters::WebClient::Helpers
  module Markdown
    def base_markdown(text)
      unless @markdown
        renderer = Coprl::Presenters::WebClient::CustomRender.new(hard_wrap: false, filter_html: true)
        options = {
          autolink: false,
          no_intra_emphasis: true,
          fenced_code_blocks: true,
          lax_html_blocks: true,
          strikethrough: true,
          superscript: true,
          disable_indented_code_blocks: true
        }
        @markdown = Redcarpet::Markdown.new(renderer, options)
      end

      @markdown.render(text)
    end

    def expand_text(text, markdown: true)
      if markdown
        self.markdown(Array(text).join("\n\n")) #.gsub("\n\n", "<br/>")
      else
        Array(text).join('<br/>')
      end
    end
  end
end
