module Coprl
  module Presenters
    module DSL
      module Components
        class Footer < Base
          attr_accessor :footer_type, :menus

          def initialize(type: nil, **attribs_, &block)
            @footer_type = type ||  :small
            super(type: :footer, **attribs_, &block)
            @menus = []
            expand!
          end

          def menu(title=nil, **attribs, &block)
            return @menus if locked?
            @menus << Menu.new(title,parent: self,
                               **attribs, &block)
          end

        end
      end
    end
  end
end
