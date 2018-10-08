module WebClient
  module Actions
    class Clear
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url, action.options.to_h, action.params.to_h]
      end
    end
  end
end

