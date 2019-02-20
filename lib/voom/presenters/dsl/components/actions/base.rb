require 'voom/presenters/dsl/components/base'
require 'hash_ext/traverse'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Base < Components::Base
            # Options are used by the actions
            # Params are passed by the user
            attr_reader :params, :dynamic_params, :options

            def initialize(type:, **attribs_, &block)
              super(type: type, **attribs_, &block)
              @options = {}
              extract_options!
              _params_ = attribs.delete(:params) {{}}
              @dynamic_params = extract_dynamic_params(_params_)
              @params = extract_params(_params_)
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

            def extract_dynamic_params(hash)
              HashExt.traverse(hash) do |k, v|
                if v.respond_to?(:to_hash) || v.respond_to?(:dynamic_parameter)
                  [k, v.to_hash]
                else
                  [nil, nil]
                end
              end
            end

            def extract_params(hash)
              HashExt.traverse(hash) do |k, v|
                if v.respond_to?(:dynamic_parameter)
                  [nil, nil]
                else
                  [k, v]
                end
              end
            end
          end
        end
      end
    end
  end
end
