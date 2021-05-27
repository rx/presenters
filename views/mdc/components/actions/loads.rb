module WebClient
  module Actions
    class Loads
      include Coprl::Presenters::WebClient::Helpers::ExpandHash

      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        safe_options = action.options.to_h
        [action.type, action.url,
         safe_options.merge({input_tag: safe_options.fetch(:input_tag, nil),
                                    wait_for_download: safe_options.fetch(:wait_for_download, false)}),
         expand_hash(action.dynamic_params)]
      end
    end
  end
end

