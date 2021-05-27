module WebClient
  module Actions
    class Snackbar
      include Coprl::Presenters::WebClient::Helpers::ExpandHash

      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url, expand_hash(action.options), expand_hash(action.dynamic_params).merge(expand_hash(action.params))]
      end
    end
  end
end
