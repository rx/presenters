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
            super(type: :page_title, parent: parent, level: level, **attribs_, &block)
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
