module Coprl::Presenters::WebClient::Helpers::Sinatra
  module TemplateHelper
    def with_presenters_wrapper(&block)
      buffer << partial("body/wrapper", locals: {
        body_content: capture(buffer, &block), header: @pom&.header, drawer: @pom&.drawer,
        footer: @pom&.footer
      })
    end

    def buffer()
      @_out_buf
    end

    def capture(buffer)
      pos = buffer.size
      yield
      buffer.slice!(pos..buffer.size)
    end
  end
end