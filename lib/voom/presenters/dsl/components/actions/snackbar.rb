module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Snackbar < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :snackbar, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
