module WebClient
  module Actions
    class Loads
      include Voom::Presenters::WebClient::Helpers::ExpandHash

      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url, action.options.to_h, expand_hash(action.dynamic_params)]
      end
    end
  end
end

