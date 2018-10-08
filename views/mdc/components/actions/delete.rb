module WebClient
  module Actions
    class Delete
      def call(action, parent_id, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url,
         action.options.to_h.merge({__parent_id__: parent_id}), {}]
      end
    end
  end
end
