require 'delegate'

module Coprl
  module Presenters
    module WebClient
      class ComponentHtmlDecorator < SimpleDelegator

        def _plugins_
          __getobj__.send(:_plugins_)
        end

        def method_missing(meth, *args, &block)
          if respond_to?(meth)
            super
          else
            nil
          end
        end

        private

        HTML_ESCAPED_ATTRIBUTES = %i(
          id
          type
        )

        def self.html_escape_attribute(attr)
          define_method(attr) do
            self.class.html_escape(super())
          end
        end

        HTML_ESCAPED_ATTRIBUTES.each do |attr|
          html_escape_attribute(attr)
        end

        def self.inherited(subclass)
          subclass::HTML_ESCAPED_ATTRIBUTES.each do |attr|
            html_escape_attribute(attr)
          end
        end

        def self.html_escape(text)
          Rack::Utils.escape_html(text)
        end

      end
    end
  end
end
