require 'voom/presenters/dsl/components/mixins/color'

module Voom
  module Presenters
    module DSL
      module Components
        class Page < Base
          include Mixins::Color
          attr_accessor :title,
                        :background_color
          alias color background_color

          def initialize(**attribs_, &block)
            super(type: :page,
                  **attribs_, &block)
            expand!
          end

          def title(title=nil)
            return @title if locked?
            @title = title
          end

          def background_color(color=nil)
            return @background_color if locked?
            @background_color = validate_color(color)
          end

        end
      end
    end
  end
end
