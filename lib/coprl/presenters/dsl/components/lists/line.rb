module Coprl
  module Presenters
    module DSL
      module Components
        module Lists
          class Line < EventBase
            extend Gem::Deprecate
            include Mixins::Tooltips
            include Mixins::Dialogs

            CHECKBOX_ATTRIBUTES = %i[name value checked dirtyable value off_value].freeze

            attr_accessor :selected, :selectable, :components

            def initialize(**attribs_, &block)
              super(type: :line, **attribs_, &block)
              @selected = attribs.delete(:selected) {false}
              @selectable = attribs.delete(:selectable) {false}
              self.text(attribs.delete(:text), attribs) if attribs[:text]
              self.subtitle(attribs.delete(:subtitle)) if attribs[:subtitle]
              self.info(attribs.delete(:info)) if attribs[:info]
              self.body(attribs.delete(:body)) if attribs[:body]
              self.avatar(attribs.delete(:avatar)) if attribs.key?(:avatar)
              self.icon(attribs.delete(:icon)) if attribs.key?(:icon)

              if @selectable
                self.checkbox(attribs.slice(*CHECKBOX_ATTRIBUTES))
              elsif attribs.key?(:checkbox)
                self.checkbox(attribs.delete(:checkbox))
              end
              @components = []
              @actions = []
              expand!
            end

            def text(*text, **attribs, &block)
              return @text if locked?
              @text = Components::Typography.new(parent: self, type: :text, text: text, **attribs, &block)
            end
            alias title text

            def subtitle(*text, **attribs, &block)
              return @subtitle if locked?
              @subtitle = Components::Typography.new(parent: self, type: :subtitle, text: text, **attribs, &block)
            end

            def info(*text, **attribs, &block)
              return @info if locked?
              @info = Components::Typography.new(parent: self, type: :info, text: text, **attribs, &block)
            end

            def body(*text, **attribs, &block)
              return @body if locked?
              @body = Components::Typography.new(parent: self, type: :body, text: text, **attribs, &block)
            end

            def avatar(avatar = nil, **attribs, &block)
              return @avatar if locked?
              @avatar = Avatar.new(parent: self, avatar: avatar,
                                   **attribs, &block)
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @icon = Icon.new(parent: self, icon: icon,
                               **attribs, &block)
            end

            def checkbox(**attributes, &block)
              return @checkbox if locked?

              # Append [] if the list is selectable and the checkbox's name
              # doesn't already include brackets:
              field_name = attributes.delete(:name).to_s
              field_name += '[]' if @selectable && !field_name.include?('[')

              @checkbox = Components::Checkbox.new(parent: self,
                                                   name: field_name,
                                                   **attributes,
                                                   &block)
            end

            def hidden_field(**attributes, &block)
              return @hidden_field if locked?

              @hidden_field = Components::HiddenField.new(parent: self, **attributes, &block)
            end

            def menu(**attributes, &block)
              return @menu if locked?
              @menu = Components::Menu.new(parent: self, **attributes, &block)
            end

            def actions(**attribs, &block)
              return @actions if locked?
              Lists::Actions.new(@actions, parent: self, **attribs, &block)
            end
            alias action actions
            deprecate :action, :actions, 2018, 8
          end
        end
      end
    end
  end
end
