module Actions
  class Replaces
    def call(action, parent_id, grid_nesting, *)
      # Type, URL, Options, Params (passed into javascript event/action classes)
      [action.type, action.url,
       action.options.to_h.merge({grid_nesting:grid_nesting, __parent_id__: parent_id}),
       {}]
    end
  end
end

