require 'voom/presenters/dsl/components/actions/loads'
require 'voom/presenters/dsl/components/actions/replaces'
require 'voom/presenters/dsl/components/actions/posts'
require 'voom/presenters/dsl/components/actions/updates'
require 'voom/presenters/dsl/components/actions/deletes'
require 'voom/presenters/dsl/components/actions/remove'
require 'voom/presenters/dsl/components/actions/dialog'
require 'voom/presenters/dsl/components/actions/toggle_visibility'
require 'voom/presenters/dsl/components/actions/snackbar'
require 'voom/presenters/dsl/components/actions/clear'
require 'voom/presenters/dsl/components/actions/navigates'
require 'voom/presenters/dsl/components/actions/stepper'

module Voom
  module Presenters
    module DSL
      module Components
        class Event < Base
          attr_accessor :event, :actions
          # Alias common event names
          EVENT_MAP = {focus: :focusin, blur: :focusout}

          def initialize(**attribs_, &block)
            super(type: :event, **attribs_, &block)
            @event = alias_event(attribs.delete(:event))
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

          def replaces(target, presenter, input_tag: nil, **params, &block)
            @actions << Actions::Replaces.new(parent: self,
                                               target: target,
                                               presenter: presenter,
                                               input_tag: input_tag,
                                               params: params, &block)
          end

          # Method can be one of :post, :put, :delete or :patch
          def posts(path, input_tag: nil, **params, &block)
            @actions << Actions::Posts.new(parent: self,
                                               path: path,
                                               input_tag: input_tag,
                                               params: params, &block)
          end

          alias creates posts

          def updates(path, input_tag: nil, **params, &block)
            @actions << Actions::Updates.new(parent: self,
                                               path: path,
                                               input_tag: input_tag,
                                               params: params, &block)
          end

          def deletes(path, input_tag: nil, **params, &block)
            @actions << Actions::Deletes.new(parent: self,
                                               path: path,
                                               input_tag: input_tag,
                                               params: params, &block)
          end

          def dialog(dialog_id, **params, &block)
            @actions << Actions::Dialog.new(parent: self,
                                               target: dialog_id,
                                               params: params, &block)
          end

          def toggle_visibility(component_id, **params, &block)
            @actions << Actions::ToggleVisibility.new(parent: self,
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

          private
          def alias_event(event)
            EVENT_MAP.fetch(event.to_sym){event.to_sym}
          end
        end
      end
    end
  end
end
