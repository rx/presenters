module WebClient
  module Actions
    class Navigates
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, nil, {}, {}]
      end
    end
  end
end

