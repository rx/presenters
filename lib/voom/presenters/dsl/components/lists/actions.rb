require 'voom/presenters/dsl/components/lists/action'

module Voom
  module Presenters
    module DSL
      module Components
        module Lists
          class Actions < Base
            def initialize(actions, **attribs_, &block)
              @actions = actions
              super(type: :actions, **attribs_, &block)
              expand!
            end

            def icon(icon=nil, **attribs, &block)
              action = Lists::Action.new(parent: self)
              action.icon(icon, **attribs, &block)
              @actions << action
            end


            def menu(**attribs, &block)
              action = Lists::Action.new(parent: self)
              action.menu(**attribs, &block)
              @actions << action
            end

            def checkbox(**attribs, &block)
              action = Lists::Action.new(parent: self)
              action.checkbox(**attribs, &block)
              @actions << action
            end

            def radio_button(**attribs, &block)
              action = Lists::Action.new(parent: self)
              action.radio_button(**attribs, &block)
              @actions << action
            end

            def switch(**attribs, &block)
              action = Lists::Action.new(parent: self)
              action.switch(**attribs, &block)
              @actions << action
            end

            def icon_button(icon=nil, **attribs, &block)
              action = Lists::Action.new(parent: self)
              action.icon_button(icon, **attribs, &block)
              @actions << action
            end
            alias icon_toggle icon_button

            def button(text=nil, **attribs, &block)
              action = Lists::Action.new(parent: self)
              action.button(text, **attribs, &block)
              @actions << action
            end
          end
        end
      end
    end
  end
end
