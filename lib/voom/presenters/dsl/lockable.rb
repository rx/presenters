module Voom
  module Presenters
    module DSL
      module Lockable
        def lock!
          @locked = true
        end

        def locked?
          @locked || frozen?
        end
      end
    end
  end
end
