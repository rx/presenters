require 'voom/presenters/web_client/helpers/expand_hash'

module WebClient
  module Actions
    class Loads
      include ExpandHash
      def call(action, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url,
         action.options.to_h.merge({input_tag: action.options.fetch(:input_tag, nil),
                                    wait_for_download: action.options.fetch(:wait_for_download, false)}),
         expand_hash(action.dynamic_params)]
      end
    end
  end
end

