module Actions
  class Post
    def call(action, *)
      # Type, URL, Options, Params (passed into javascript event/action classes)
      [action.type, action.url, action.options.to_h,
       nils_to_empty_string(action.params.to_h)  ]
    end

    private
    def nils_to_empty_string(params)
      params.map {|k, v| [k, v.nil? ? '' : v]}.to_h
    end
  end
end

