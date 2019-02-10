require 'voom/presenters/dsl/components/typography'
require 'voom/presenters/dsl/components/mixins/grids'
require 'voom/presenters/dsl/components/mixins/append'

module Voom
  module Presenters
    module DSL
      module Components
        class PageTitle < Typography
          include Mixins::Grids
          include Mixins::Append

          attr_accessor :components

          def initialize(parent:, level: nil, **attribs_, &block)
            @components = []
            super(type: :page_title, parent: parent, level: level, **attribs_, &block)
          end
        end
      end
    end
  end
end
