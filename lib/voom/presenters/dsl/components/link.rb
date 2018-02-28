require_relative 'mixin_modifies'

module Voom
  module Presenters
    module DSL
      module Components
        class Link < Base
          include MixinModifies

          attr_accessor :target, :params
          
          def initialize(parent:, **params, &block)
            super(type: :link, parent: parent, &block)
            @url = nil
            @replaces = nil
            @target = params.delete(:target)
            @params = params[:context]
            expand!
          end

          def url
            @parent.router.url(render: target, context: params)
          end

          def replaces(component_id=nil)
            return @replaces if locked?
            @replaces = component_id
          end
        end
      end
    end
  end
end
