module Coprl::Presenters::WebClient::Helpers::Rails
  module TemplateHelper
    def with_presenters_wrapper(&block)
      render partial: 'body/wrapper', locals: {
        body_content: capture(&block), header: @pom&.header, drawer: @pom&.drawer,
        footer: @pom&.footer
      }
    end
  end
end
