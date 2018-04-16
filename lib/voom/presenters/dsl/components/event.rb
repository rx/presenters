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

          def loads(presenter, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :loads,
                                               target: nil,
                                               presenter: presenter,
                                               params: params, &block)
          end

          def replaces(target, presenter, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :replaces,
                                               target: target,
                                               presenter: presenter,
                                               params: params, &block)
          end

          # Method can be one of :post, :put, :delete or :patch
          def posts(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :post,
                                               path: path,
                                               params: params, &block)
          end

          alias creates posts

          def updates(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :update,
                                               path: path,
                                               params: params, &block)
          end

          def deletes(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :delete,
                                               path: path,
                                               params: params, &block)
          end

          def dialog(dialog_id, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :dialog,
                                               target: dialog_id,
                                               params: params, &block)
          end

          def toggle_visiblity(component_id, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :toggle_visibility,
                                               target: component_id,
                                               params: params, &block)
          end

          def snackbar(text, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :snackbar,
                                               params: params.merge(text: text), &block)
          end
        end
      end
    end
  end
end
