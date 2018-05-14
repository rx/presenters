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
            attr_accessor :actions, :selected, :selectable

            def initialize(context:, **attribs_, &block)
              super(type: :line, context: context, **attribs_, &block)
              @selected = attribs.delete(:selected) || false
              @selectable = attribs.delete(:selectable) || false
              self.text(attribs.delete(:text)) if attribs.key?(:text)
              self.subtitle(attribs.delete(:subtitle)) if attribs.key?(:subtitle)
              self.info(attribs.delete(:info)) if attribs.key?(:info)
              self.body(attribs.delete(:body)) if attribs.key?(:body)
              self.avatar(attribs.delete(:avatar)) if attribs.key?(:avatar)
              self.icon(attribs.delete(:icon)) if attribs.key?(:icon)
              self.checkbox(attribs.delete(:checkbox)) if attribs.key?(:checkbox) && !@selectable
              self.checkbox(attribs.slice(:name, :value).merge(class_name: 'v-list-item--selectable-checkbox')) if @selectable

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
              @checkbox = Components::Checkbox.new(parent: self, context: context, **attributes, &block)
            end

            def menu(**attributes, &block)
              return @menu if locked?
              @menu = Components::Menu.new(parent: self, context: context, **attributes, &block)
            end

            def action(**attribs, &block)
              @actions << Lists::Action.new(parent: self,
                                            **attribs, &block)
            end
          end
        end
      end
    end
  end
end