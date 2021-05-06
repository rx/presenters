module Voom::Presenters::WebClient::Helpers::Rails
  module LocalVariables
    # A rails specific helper to see if a local variable is defined
    # This passes the binding from the evaluating (erb) context
    # We don't do this inline, because rails and sintra have different variable names for the same thing
    def bound_locals_include?(variable, __binding__)
      # puts "local_variables: #{__binding__.send(:local_variables)}"
      locals = __binding__.local_variable_get(:local_assigns)
      locals.include? variable
    end
  end
end
