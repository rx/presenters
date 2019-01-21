require_relative 'mixins/expand_hash'

module WebClient
  module Actions
    class Post
      include ExpandHash
      def call(action, parent_id, *)
        # Type, URL, Options, Params (passed into javascript event/action classes)
        [action.type, action.url,
         expand_hash(action.options).merge({__parent_id__: parent_id, input_tag: action.options[:input_tag]}),
         expand_hash(action.dynamic_params)]
      end

      # private
      # def nils_to_empty_string(params)
      #   params.map {|k, v| [k, v.nil? ? '' : v]}.to_h
      # end
    end
  end
end
