module Coprl
  module Presenters
    module Helpers
      module Errors
        def raise_parameter_validation(msg)
          raise Coprl::Presenters::Errors::ParameterValidation, msg
        end
      end
    end
  end
end
