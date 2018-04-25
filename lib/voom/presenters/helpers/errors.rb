module Voom
  module Presenters
    module Helpers
      module Errors
        def raise_parameter_validation(msg)
          raise Voom::Presenters::Errors::ParameterValidation, msg
        end
      end
    end
  end
end
