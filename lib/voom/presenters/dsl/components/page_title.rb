require 'voom/presenters/dsl/components/typography'
require 'voom/presenters/dsl/components/mixins/grids'
require 'voom/presenters/dsl/components/mixins/append'
require 'voom/presenters/dsl/components/mixins/typography'
require 'voom/presenters/dsl/components/mixins/icons'
require 'voom/presenters/dsl/components/mixins/buttons'

module Voom
  module Presenters
    module DSL
      module Components
        class PageTitle < Typography
          include Mixins::Grids
          include Mixins::Append
          include Components::Mixins::Typography
          include Components::Mixins::Icons
          include Components::Mixins::Buttons

          attr_accessor :components

          def initialize(parent:, level: nil, **attribs_, &block)
            @components = []
            super(type: :page_title,
                  parent: parent,
                  level: level,
                  **attribs_, &block)
            self.icon(attribs.delete(:icon)) if attribs.key?(:icon)
          end

          def icon(icon = nil, **attribs, &block)
            self << Components::Icon.new(parent: self, icon: icon,
                                         **attribs, &block)
          end
        end
      end
    end
  end
end
