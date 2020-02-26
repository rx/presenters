module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Common
            include Mixins::Toggles
            include Mixins::Append
            include Mixins::Typography
            include Mixins::Grids
            include Mixins::Buttons
            include Mixins::ExpansionPanels
            include Mixins::Content
            include Mixins::Menus
            include Mixins::TabBars
            include Mixins::Images
            include Mixins::Icons
            include Mixins::ImageLists
            include Mixins::Dialogs
            include Mixins::Tables
            
            def badge(badge=nil, **attributes, &block)
              self << Components::Badge.new(parent: self, badge: badge, **attributes, &block)
            end

            def card(**attributes, &block)
              self << Components::Card.new(parent: self, **attributes, &block)
            end

            def form(id: nil, **attributes, &block)
              self << Components::Form.new(parent: self, id: id, **attributes, &block)
            end

            def list(**attributes, &block)
              self << Components::List.new(parent: self,
                                           **attributes, &block)
            end
            
            def table(**attributes, &block)
              self << Components::Table.new(parent: self, **attributes, &block)
            end

            def unordered_list(**attributes, &block)
              self << Components::UnorderedList.new(parent: self, **attributes, &block)
            end

            def avatar(avatar = nil, **attributes, &block)
              self << Components::Avatar.new(parent: self, avatar: avatar, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
