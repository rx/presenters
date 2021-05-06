module Voom::Presenters::WebClient::Helpers::Sinatra
  module LocalVariables
    # A sinatra specific helper to see if a local variable is defined
    # This passes the binding from the evaluating (erb) context
    # We don't do this inline, because rails and sintra have different variable names for the same thing
    def bound_locals_include?(variable, __binding__)
      locals = __binding__.local_variable_get(:locals)
      locals.include? variable
    end
  end
end
