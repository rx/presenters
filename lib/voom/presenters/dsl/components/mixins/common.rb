require_dependency 'voom/presenters/dsl/components/mixins/append'
require_dependency 'voom/presenters/dsl/components/mixins/toggles'
require_dependency 'voom/presenters/dsl/components/mixins/typography'
require_dependency 'voom/presenters/dsl/components/mixins/grids'
require_dependency 'voom/presenters/dsl/components/mixins/buttons'
require_dependency 'voom/presenters/dsl/components/mixins/expansion_panels'
require_dependency 'voom/presenters/dsl/components/mixins/content'
require_dependency 'voom/presenters/dsl/components/mixins/menus'
require_dependency 'voom/presenters/dsl/components/mixins/google_maps'
require_dependency 'voom/presenters/dsl/components/mixins/tab_bars'

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
            include Mixins::GoogleMaps
            include Mixins::TabBars

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
          end
        end
      end
    end
  end
end
