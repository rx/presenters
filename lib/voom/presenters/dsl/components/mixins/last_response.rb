require 'voom/serializer'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module LastResponse
            # Defines a client side dynamic parameter used by an action
            # Example usage:
            #     updates forte_path, params: params
            #     updates update_portal_path(portal_id: portal.id, token: last_response.token)
            class ActionParameter
              include Voom::Serializer

              attr_reader :type, :response_index, :value

              def initialize(index=0)
                @value = []
                @type = :action_parameter
                @response_index = index
              end

              def type
                :action_parameter
              end

              def method_missing(name, *args, &block)
                @value << name
                self
              end

              def to_h
                to_hash(false)
              end
            end

            def last_response(index=0)
              @_last_response_ ||= ActionParameter.new(index)
            end
          end
        end
      end
    end
  end
end
