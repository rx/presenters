require_relative 'datetime_base'

module Voom
  module Presenters
    module DSL
      module Components
        class TimeField < DatetimeBase
          attr_reader :config

          def initialize(**attribs_, &block)
            super(type: :time, **attribs_, &block)
            @config = {}
            merge_config(:min_time)
            merge_config(:max_time)
            expand!
          end
        end
      end
    end
  end
end

