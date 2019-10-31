require 'voom/presenters/web_client/helpers/expand_hash'

module WebClient
  module Actions
    class Replaces
      include ExpandHash
      def call(action, parent_id, grid_nesting, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url,
         action.options.to_h.merge({grid_nesting: grid_nesting,
                                    __parent_id__: parent_id,
                                    input_tag: action.options[:input_tag],
                                    insert: action.insert,
                                    verb: action.verb,
                                    encode_body: action.encode_body})
                            .merge(expand_hash(body: action.body)),
         expand_hash(action.dynamic_params)]
      end
    end
  end
end
