module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Replaces < Actions::Base
            include Namespace

            def initialize(**attribs_, &block)
              super(type: :replaces, **attribs_, &block)
              option_value = attribs.delete(:include_input_values) { :not_found }
              @options.merge!(include_input_values: option_value) unless option_value == :not_found
              @host = @params.fetch(:host, false)
            end

            def url
              presenter = _expand_namespace_(options[:presenter], namespace)
              @parent.router.url(render: presenter, command: options[:path], context: params, host: @host)
            end
          end
        end
      end
    end
  end
end
