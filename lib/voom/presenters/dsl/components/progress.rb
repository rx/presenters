require 'voom/presenters/dsl/components/base'

module Voom
  module Presenters
    module DSL
      module Components
        class Progress < Base
          attr_reader :hidden

          def initialize(**attribs_, &block)
            super(type: :progress, **attribs_, &block)
            @hidden = attribs.delete(:hidden){false}
          end
        end
      end
    end
  end
end
