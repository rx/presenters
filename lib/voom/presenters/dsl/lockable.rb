module Voom
  module Presenters
    module DSL
      module Lockable
        def locked?
          @parent.send(:locked?)
        end
      end
    end
  end
end
