module WebClient
  module Actions
    class Loads
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url, action.options.to_h, {}]
      end
    end
  end
end

