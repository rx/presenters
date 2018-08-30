require_relative 'actions/loads'
require_relative 'actions/replaces'
require_relative 'actions/posts'
require_relative 'actions/updates'
require_relative 'actions/deletes'
require_relative 'actions/remove'
require_relative 'actions/dialog'
require_relative 'actions/toggle_visibility'
require_relative 'actions/snackbar'
require_relative 'actions/auto_complete'
require_relative 'actions/clear'
require_relative 'actions/navigates'
require_relative 'actions/stepper'

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

          def loads(presenter=nil, path: nil, target: nil, **params, &block)
            @actions << Actions::Loads.new(parent: self,
                                               presenter: presenter,
                                               path: path,
                                               target: target,
                                               params: params, &block)
          end

          def replaces(target, presenter, **params, &block)
            @actions << Actions::Replaces.new(parent: self,
                                               target: target,
                                               presenter: presenter,
                                               params: params, &block)
          end

          # Method can be one of :post, :put, :delete or :patch
          def posts(path, **params, &block)
            @actions << Actions::Posts.new(parent: self,
                                               path: path,
                                               params: params, &block)
          end

          alias creates posts

          def updates(path, **params, &block)
            @actions << Actions::Updates.new(parent: self,
                                               path: path,
                                               params: params, &block)
          end

          def deletes(path, **params, &block)
            @actions << Actions::Deletes.new(parent: self,
                                               path: path,
                                               params: params, &block)
          end

          def dialog(dialog_id, **params, &block)
            @actions << Actions::Dialog.new(parent: self,
                                               target: dialog_id,
                                               params: params, &block)
          end

          def toggle_visibility(component_id, **params, &block)
            @actions << Actions::ToggleVisiblity.new(parent: self,
                                               target: component_id,
                                               params: params, &block)
          end

          # Removes the component and all its children
          # Takes either an id or a list of ids.
          def remove(*ids, **params, &block)
            @actions << Actions::Remove.new(parent: self,
                                           params: params.merge(ids: ids), &block)
          end
          alias removes remove

          def show(component_id, **params, &block)
            @actions << Actions::ToggleVisibility.new(parent: self,
                                               target: component_id,
                                               params: params.merge(action: :show), &block)
          end

          def hide(component_id, **params, &block)
            @actions << Actions::ToggleVisibility.new(parent: self,
                                               target: component_id,
                                               params: params.merge(action: :hide), &block)
          end

          def snackbar(text, **params, &block)
            @actions << Actions::Snackbar.new(parent: self,
                                               params: params.merge(text: text), &block)
          end

          def autocomplete(path, **params, &block)
            @actions << Actions::AutoComplete.new(parent: self,
                                               path: path,
                                               target: "#{parent(:text_field).id}-list",
                                               params: params, &block)
          end

          def navigates(direction, **params, &block)
            @actions << Actions::Navigates.new(parent: self,
                                               params: params.merge(direction: direction), &block)
          end

          alias navigate navigates

          # Clears or blanks out a control or form.
          # Takes either an id or a list of ids.
          # If the id is that of a form then all the clearable inputs on the form will be cleared.
          def clear(*ids, **params, &block)
            @actions << Actions::Clear.new(parent: self,
                                               params: params.merge(ids: ids), &block)
          end

          alias clears clear

          def stepper(navigate, **params, &block)
            @actions << Actions::Stepper.new(parent: self,
                                               params: params.merge(navigate: navigate, stepper_id: parent(:stepper).id), &block)
          end
        end
      end
    end
  end
end
