module WebClient
  module Actions
    class Snackbar
      def call(action, *)
        action_params = action.params.to_h.deep_transform_values do |v|
          v.respond_to?(:to_h) ? v.to_h : v
        end

        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url, action.options.to_h, action_params.to_h]
      end
    end
  end
end
