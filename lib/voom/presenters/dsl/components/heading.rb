module Voom
  module Presenters
    module DSL
      module Components
        class Heading < Base
          attr_accessor :text, :level

          def initialize(**attribs, &block)
            @text = attribs[:text]
            @level = attribs[:level] || 1
            super(type: :heading, **attribs, &block)
            expand!
          end
        end
      end
    end
  end
end
