module Coprl
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
              %i(path presenter target headers).each do |option|
                option_value = attribs.delete(option){:not_found}
                @options.merge!({option => option_value}) unless option_value==:not_found
              end
              # Special case ... the input tag is defined at the component base level for all components
              # By the time we get here we have put it into its accessor via the super call
              # So we manually move it to the options for all actions
              @options.merge!(input_tag: self.input_tag) if self.input_tag
            end

            def extract_dynamic_params(hash)
              HashExt::Traverse.traverse(hash) do |k, v|
                if v.respond_to?(:to_hash) || v.respond_to?(:dynamic_parameter)
                  [k, clean_dynamic_values(v.to_hash)]
                else
                  [nil, nil]
                end
              end
            end

            # This is an attempt to fix an intermittent bug where "params" would end up in the list of
            # values when using `last_response`.
            def clean_dynamic_values(hash)
              hash[:value].delete(:params) if hash.has_key?(:value) && hash[:value].is_a?(Array)
              hash
            end

            def extract_params(hash)
              HashExt::Traverse.traverse(hash) do |k, v|
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
