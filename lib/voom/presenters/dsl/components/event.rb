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

          def show(component_id, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :toggle_visibility,
                                               target: component_id,
                                               params: params.merge(action: :show), &block)
          end

          def hide(component_id, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :toggle_visibility,
                                               target: component_id,
                                               params: params.merge(action: :hide), &block)
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
                                               params: params.merge(direction: direction), &block)
          end

          alias navigate navigates

          # Clears or blanks out a control or form.
          # Takes either an id or a list of ids.
          # If the id is that of a form then all the clearable inputs on the form will be cleared.
          def clear(*ids, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :clear,
                                               params: params.merge(ids: ids), &block)
          end

          alias clears clear

          def stepper(navigate, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               type: :stepper,
                                               params: params.merge(navigate: navigate, stepper_id: parent(:stepper).id), &block)
          end
        end
      end
    end
  end
end
