require 'voom/presenters/dsl/components/actions/base'
require'voom/presenters/namespace'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Replaces < Actions::Base
            include Namespace
            VALID_ENCODINGS = %i(json).freeze

            attr_reader :insert, :verb, :body, :encode_body

            def initialize(insert: false,
                           verb: :get,
                           body: nil,
                           encode_body: nil, # json is valid
                           **attribs_, &block)
              super(type: :replaces, **attribs_, &block)
              @insert = insert
              @verb = verb
              @body = body
              @encode_body = validate_encoding(encode_body)
            end

            def url
              presenter = _expand_namespace_(options[:presenter], namespace)
              @parent.router.url(render: presenter, context: params)
            end

            private

            def validate_encoding(encode_body)
              return unless encode_body
              raise Errors::InvalidDsl,
                    "Replaces encode_body unexpected value (#{encode_body}). " \
                    "Valid values are (#{VALID_ENCODINGS.join(', ')})." unless VALID_ENCODINGS.include?(encode_body.to_sym)
              encode_body
            end
          end
        end
      end
    end
  end
end
