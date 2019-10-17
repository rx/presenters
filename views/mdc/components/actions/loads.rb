require 'voom/presenters/web_client/helpers/expand_hash'

module WebClient
  module Actions
    class Loads
      include ExpandHash
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, expand_hash(action.url),
         options_with_defaults(action.options),
         expand_hash(action.dynamic_params)]
      end

      private

      def options_with_defaults(options)
        safe_options = options.to_h
        expand_dynamic_parameters(safe_options.merge({input_tag: safe_options.fetch(:input_tag, nil),
                            wait_for_download: safe_options.fetch(:wait_for_download, false)}))
      end

      def expand_dynamic_parameters(opts)
        opts.map { |k,v| [k, v.respond_to?(:dynamic_parameter) ? v.to_h : v] }.to_h
      end
    end
  end
end

