module Voom
  module Presenters
    module DSL
      module Components
        class Form < Base
          module Fields
            class Text < Base
              attr_accessor :label, :required, :pattern, :hint, :value
              attr_reader   :error

              def initialize(**attribs, &block)
                @label = attribs[:label]
                @required = attribs[:required]
                @pattern = attribs[:pattern]
                @hint = attribs[:hint]
                @value = attribs[:value]
                @error = errors(attribs) || attribs[:error]
                super(type: :text, **attribs, &block)
                expand!
              end
            end
          end
        end
      end
    end
  end
end
