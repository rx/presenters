module Voom
  module Presenters
    module DSL
      module Components
          class ListAction < Base
            attr_accessor :action_type

            def initialize(**attribs_, &block)
              super(type: :action, **attribs_, &block)
              expand!
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if frozen?
              @action_type = :icon
              @icon = Icon.new(icon: icon,
                               router: @router, context: @context,
                               dependencies: @dependencies,
                               helpers: @helpers, **attribs, &block)
            end


            def menu(**attribs, &block)
              return @menu if frozen?
              @action_type = :menu
              @menu = Menu.new(router: @router, context: @context,
                                                      dependencies: @dependencies,
                                                      helpers: @helpers, **attribs, &block)
            end
            
            def checkbox(**attribs, &block)
               return @checkbox if frozen?
               @action_type = :checkbox
               @checkbox = Checkbox.new(router: @router, context: @context,
                                        dependencies: @dependencies,
                                        helpers: @helpers, **attribs, &block)
             end

             def radio_button(**attribs, &block)
               return @radio_button if frozen?
               @action_type = :radio_button
               @radio_button = RadioButton.new(router: @router, context: @context,
                                               dependencies: @dependencies,
                                               helpers: @helpers, **attribs, &block)
             end

             def switch(**attribs, &block)
               return @switch if frozen?
               @action_type = :switch
               @switch = Switch.new(router: @router, context: @context,
                                    dependencies: @dependencies,
                                    helpers: @helpers, **attribs, &block)
             end

             def icon_toggle(icon=nil, **attribs, &block)
               return @icon_toggle if frozen?
               @action_type = :icon_toggle
               @icon_toggle = IconToggle.new(icon: icon, router: @router, context: @context,
                                    dependencies: @dependencies,
                                    helpers: @helpers, **attribs, &block)
             end
          end
        end
      end
    end
  end

