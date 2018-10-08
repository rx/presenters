module WebClient
  module Actions
    class Dialog
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, nil, action.options.to_h, {}]
      end
    end
  end
end

