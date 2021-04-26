require 'voom/presenters/dsl/components/datetime_base'

module Voom
  module Presenters
    module DSL
      module Components
        class DateField < DatetimeBase
          attr_reader :config

          def initialize(**attribs_, &block)
            super(type: :date, **attribs_, &block)
            merge_config(:min_date)
            merge_config(:max_date)
            @hint ||= 'Enter date as MM/DD/YYYY' unless @picker
            expand!
          end

        end
      end
    end
  end
end

