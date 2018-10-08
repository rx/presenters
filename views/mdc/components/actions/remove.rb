module WebClient
  module Actions
    class Remove
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, nil, action.options.to_h, action.params.to_h]
      end
    end
  end
end
