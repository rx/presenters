module Voom
  module Presenters
    module DSL
      module Components
        class Action < Base
          attr_accessor :target, :presenter, :path, :params, :action_type
         
          def initialize(action_type:, **attribs_, &block)
            super(type: :action, **attribs_, &block)
            @target = attribs.delete(:target)
            @presenter = attribs.delete(:presenter)
            @path = attribs.delete(:path)
            @params = attribs.delete(:params)
            @action_type = action_type
            @url = nil
          end

          def url
            @parent.router.url(command: target, context: params)  
          end
        end
      end
    end
  end
end
