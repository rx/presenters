require_dependency 'voom/presenters/dsl/components/icon'
require_dependency 'voom/presenters/dsl/components/icon_toggle'


module Voom
  module Presenters
    module DSL
      module Components
        module Lists
          class Action < Base
            attr_accessor :action_type

            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              expand!
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @action_type = :icon
              @icon = Icon.new(parent: self, icon: icon,
                               **attribs, &block)
            end


            def menu(**attribs, &block)
              return @menu if locked?
              @action_type = :menu
              @menu = Menu.new(parent: self, 
                               **attribs, &block)
            end

            def checkbox(**attribs, &block)
              return @checkbox if locked?
              @action_type = :checkbox
              @checkbox = Checkbox.new(parent: self, 
                                       **attribs, &block)
            end

            def radio_button(**attribs, &block)
              return @radio_button if locked?
              @action_type = :radio_button
              @radio_button = RadioButton.new(parent: self, 
                                              **attribs, &block)
            end

            def switch(**attribs, &block)
              return @switch if locked?
              @action_type = :switch
              @switch = Switch.new(parent: self,
                                   **attribs, &block)
            end

            def icon_toggle(icon=nil, **attribs, &block)
              return @icon_toggle if locked?
              @action_type = :icon_toggle
              @icon_toggle = IconToggle.new(parent: self, icon: icon, **attribs, &block)
            end

            def button(text=nil, **attribs, &block)
              return @button if locked?
              @action_type = :button
              @button = Components::Button.new(text: text, parent: self, **attribs, &block)
            end
          end
        end
      end
    end
  end
end

