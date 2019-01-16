module WebClient
  module Actions
    class Snackbar
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url, action.options.to_h, action.dynamic_params.merge(action.params)]
      end
    end
  end
end
