require_relative 'text_field'

module Voom
  module Presenters
    module DSL
      module Components
        class DateTime < TextField
          def initialize(**attribs_, &block)
            super(type: :date_time, **attribs_, &block)
            expand!
          end
        end
      end
    end
  end
end

