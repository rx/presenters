module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Loads < Actions::Base
            include Namespace

            def initialize(**attribs_, &block)
              super(type: :loads, **attribs_, &block)
              option_value = attribs.delete(:wait_for_download){:not_found}
              @options.merge!(wait_for_download: option_value) unless option_value==:not_found
              @host = @params.fetch(:host, false)
            end

            def url
              @parent.router.url(render: parse_presenter, command: options[:path], context: params, host: @host)
            end

            private

            def parse_presenter
              return options[:presenter] if options[:presenter].match(/^https?\:\/\//)
              _expand_namespace_(options[:presenter], namespace).gsub(':', '/')
            end
          end
        end
      end
    end
  end
end
