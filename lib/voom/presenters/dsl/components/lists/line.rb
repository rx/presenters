require_relative 'action'
require_relative '../icon'
require_relative '../avatar'
require_relative '../typography'
require_relative '../mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        module Lists
          class Line < EventBase
            attr_accessor :selected, :selectable

            def initialize(**attribs_, &block)
              super(type: :line, **attribs_, &block)
              @selected = attribs.delete(:selected) {false}
              @selectable = attribs.delete(:selectable) {false}
              self.text(attribs.delete(:text)) if attribs.key?(:text)
              self.subtitle(attribs.delete(:subtitle)) if attribs.key?(:subtitle)
              self.info(attribs.delete(:info)) if attribs.key?(:info)
              self.body(attribs.delete(:body)) if attribs.key?(:body)
              self.avatar(attribs.delete(:avatar)) if attribs.key?(:avatar)
              self.icon(attribs.delete(:icon)) if attribs.key?(:icon)
              self.checkbox(attribs.delete(:checkbox)) if attribs.key?(:checkbox) && !@selectable
              self.checkbox(attribs.slice(:name, :value)) if @selectable

              @actions = []
              expand!
            end

            def text(*text, **attribs, &block)
              return @text if locked?
              @text = Components::Typography.new(parent: self, type: :text, text: text, context: context, **attribs, &block)
            end

            def subtitle(*text, **attribs, &block)
              return @subtitle if locked?
              @subtitle = Components::Typography.new(parent: self, type: :subtitle, text: text, context: context, **attribs, &block)
            end

            def info(*text, **attribs, &block)
              return @info if locked?
              @info = Components::Typography.new(parent: self, type: :info, text: text, context: context, **attribs, &block)
            end

            def body(*text, **attribs, &block)
              return @body if locked?
              @body = Components::Typography.new(parent: self, type: :body, text: text, context: context, **attribs, &block)
            end

            def avatar(avatar = nil, **attribs, &block)
              return @avatar if locked?
              @avatar = Avatar.new(parent: self, avatar: avatar,
                                   context: context,
                                   **attribs, &block)
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @icon = Icon.new(parent: self, icon: icon,
                               context: context,
                               **attribs, &block)
            end

            def checkbox(**attributes, &block)
              return @checkbox if locked?
              field_name = @selectable ? "#{attributes.delete(:name)}[]" : attributes.delete(:name)
              @checkbox = Components::Checkbox.new(parent: self,
                                                   context: context,
                                                   name: field_name,
                                                   **attributes,
                                                   &block)
            end

            def menu(**attributes, &block)
              return @menu if locked?
              @menu = Components::Menu.new(parent: self, context: context, **attributes, &block)
            end

            def actions(**attribs, &block)
              return @actions if locked?
              Actions.new(@actions, parent: self,
                          context: context,
                          **attribs, &block)
            end

            class Actions < Base
              def initialize(actions, **attribs_, &block)
                @actions = actions
                super(type: :actions, **attribs_, &block)
                expand!
              end


              def icon(icon=nil, **attribs, &block)
                action = Lists::Action.new(parent: self, context: context)
                action.icon(icon, **attribs, &block)
                @actions << action
              end


              def menu(**attribs, &block)
                action = Lists::Action.new(parent: self, context: context)
                action.menu(**attribs, &block)
                @actions << action
              end

              def checkbox(**attribs, &block)
                action = Lists::Action.new(parent: self, context: context)
                action.checkbox(**attribs, &block)
                @actions << action
              end

              def radio_button(**attribs, &block)
                action = Lists::Action.new(parent: self, context: context)
                action.radio_button(**attribs, &block)
                @actions << action
              end

              def switch(**attribs, &block)
                action = Lists::Action.new(parent: self, context: context)
                action.switch(**attribs, &block)
                @actions << action
              end

              def icon_toggle(icon=nil, **attribs, &block)
                action = Lists::Action.new(parent: self, context: context)
                action.icon_toggle(icon, **attribs, &block)
                @actions << action
              end

              def button(text=nil, **attribs, &block)
                action = Lists::Action.new(parent: self, context: context)
                action.button(text, **attribs, &block)
                @actions << action
              end
            end
          end
        end
      end
    end
  end
end
