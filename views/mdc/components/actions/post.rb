module WebClient
  module Actions
    class Post
      include Coprl::Presenters::WebClient::Helpers::ExpandHash

      def call(action, parent_id, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url,
         expand_hash(action.options).merge({__parent_id__: parent_id, input_tag: action.options[:input_tag]}),
         expand_hash(action.dynamic_params)]
      end
    end
  end
end
