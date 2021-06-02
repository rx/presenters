module Coprl
  module Presenters
    module Helpers
      module Rails
        module Currency
          include ActionView::Helpers::NumberHelper

          def cents_to_currency(amount)
            number_to_currency(amount.to_f / 100)
          end

        end
      end
    end
  end
end
