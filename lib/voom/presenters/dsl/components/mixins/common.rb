require 'voom/presenters/dsl/components/mixins/append'
require 'voom/presenters/dsl/components/mixins/toggles'
require 'voom/presenters/dsl/components/mixins/typography'
require 'voom/presenters/dsl/components/mixins/grids'
require 'voom/presenters/dsl/components/mixins/buttons'
require 'voom/presenters/dsl/components/mixins/expansion_panels'
require 'voom/presenters/dsl/components/mixins/content'
require 'voom/presenters/dsl/components/mixins/menus'
require 'voom/presenters/dsl/components/mixins/google_maps'
require 'voom/presenters/dsl/components/mixins/tab_bars'
require 'voom/presenters/dsl/components/mixins/images'
require 'voom/presenters/dsl/components/mixins/progress'
require 'voom/presenters/dsl/components/mixins/dialogs'

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
            # include Mixins::GoogleMaps
            include Mixins::TabBars
            include Mixins::Images
            include Mixins::Progress
            include Mixins::Dialogs

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

            def avatar(avatar = nil, **attributes, &block)
              self << Components::Avatar.new(parent: self, avatar: avatar, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
