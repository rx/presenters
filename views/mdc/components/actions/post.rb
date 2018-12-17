require 'hash/deep_transform_values'

module WebClient
  module Actions
    class Post
      def call(action, parent_id, *)
        action_params = action.params.to_h.deep_transform_values do |v|
          v.respond_to?(:to_hash) ? v.to_hash : v
        end

        # Type, URL, Options, Params, Headers (passed into javascript event/action classes)
        [action.type, action.url,
         action.options.to_h.merge({__parent_id__: parent_id, input_tag: action.options[:input_tag]}),
         nils_to_empty_string(action_params.to_h)]
      end

      private
      def nils_to_empty_string(params)
        params.map {|k, v| [k, v.nil? ? '' : v]}.to_h
      end
    end
  end
end
