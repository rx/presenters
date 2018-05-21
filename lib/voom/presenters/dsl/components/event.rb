module Voom
  module Presenters
    module DSL
      module Components
        class Event < Base
          attr_accessor :event, :actions

          def initialize(**attribs_, &block)
            super(type: :event, **attribs_, &block)
            @event = attribs.delete(:event)
            @actions = []
            expand!
          end

          def loads(presenter=nil, path: nil, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :loads,
                                               presenter: presenter,
                                               path: path,
                                               params: params, &block)
          end

          def replaces(target, presenter, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :replaces,
                                               target: target,
                                               presenter: presenter,
                                               params: params, &block)
          end

          # Method can be one of :post, :put, :delete or :patch
          def posts(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :post,
                                               path: path,
                                               params: params, &block)
          end

          alias creates posts

          def updates(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :update,
                                               path: path,
                                               params: params, &block)
          end

          def deletes(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :delete,
                                               path: path,
                                               params: params, &block)
          end

          def dialog(dialog_id, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :dialog,
                                               target: dialog_id,
                                               params: params, &block)
          end

          def toggle_visibility(component_id, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :toggle_visibility,
                                               target: component_id,
                                               params: params, &block)
          end

          def snackbar(text, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :snackbar,
                                               params: params.merge(text: text), &block)
          end

          def autocomplete(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :autocomplete,
                                               path: path,
                                               target: "#{parent(:text_field).id}-list",
                                               params: params, &block)
          end

          def navigates(direction, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :navigates,
                                               direction: direction,
                                               params: params, &block)
          end
          alias navigate navigates
        end
      end
    end
  end
end
