require 'voom/presenters/dsl/components/actions/base'
require 'voom/presenters/namespace'


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
            end

            def url
              return presenter if dynamic_url?
              @parent.router.url(render: parse_presenter, context: params)
            end

            private

            def presenter
              options[:presenter]
            end

            def parse_presenter
              return presenter if presenter_url?
              _expand_namespace_(presenter, namespace).gsub(':', '/')
            end

            def presenter_url?
              presenter.match(/^https?\:\/\//)
            end

            def dynamic_url?
              presenter.respond_to?(:dynamic_parameter)
            end
          end
        end
      end
    end
  end
end
