require 'voom/presenters/dsl/components/base'
require 'hash/deep_transform_values'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Base < Components::Base
            # Options are used by the actions
            # Params are passed by the user
            attr_reader :params, :options

            def initialize(type:, **attribs_, &block)
              super(type: type, **attribs_, &block)
              @options = {}
              extract_options!
              @params = expand_dynamic_action_values(attribs.delete(:params) {{}})

              @url = nil
            end

            def url
              @parent.router.url(render: options[:presenter], command: options[:path], context: params)
            end

            private
            def extract_options!
              %i(path presenter target input_tag headers).each do |option|
                optionValue = attribs.delete(option)
                @options.merge!({option => optionValue}) if optionValue
              end
            end

            # When our parameters have dynamic value expressions like last_response.blah we need to expand the values
            def expand_dynamic_action_values(_params_)
              _params_.to_h.deep_transform_values do |v|
                v.respond_to?(:to_hash) ? v.to_hash : v
              end
            end
          end
        end
      end
    end
  end
end
