module Voom
  module Presenters
    module DSL
      module Components
        class Form < Base
          module Fields
            class Hidden < Base
              attr_accessor :value

              def initialize(**attribs, &block)
                @value = attribs[:value]
                super(type: :hidden, **attribs, &block)
                expand!
              end
            end
          end
        end
      end
    end
  end
end
