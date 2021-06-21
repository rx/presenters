module Coprl::Presenters::WebClient::Helpers::Rails
  module TemplateHelper
    def with_presenters_wrapper(&block)
      content = capture(&block)

      render partial: 'body/wrapper', locals: { body_content: content, header: @pom&.header,
             drawer: @pom&.drawer, footer: @pom&.footer }
    end

  end
end
