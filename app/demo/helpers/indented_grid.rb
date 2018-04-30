module Demo
  module Helpers
    module IndentedGrid
      def indented_grid(&block)
        grid do
          column 1
          column 10 do
            yield_to(&block)
          end
        end
      end
    end
  end
end