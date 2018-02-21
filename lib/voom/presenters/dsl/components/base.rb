require_relative 'method_missing'
require_relative '../lockable'
require_relative '../../../serializer'
require_relative '../../../trace'

require 'securerandom'

module Voom
  module Presenters
    module DSL
      module Components
        # Every object in the POM is a node
        # This class provides common base implementation
        class Base
          include Lockable
          include Components::MethodMissing

          include Voom::Serializer
          include LoggerMethods
          include Trace

          attr_reader :type, :id, :attributes, :context
          private :context

          alias params context
          alias attribs attributes

          def initialize(type:, parent:, id: nil, context: {}, **attributes, &block)
            @id = h(id) || "id-#{SecureRandom.hex}"
            @type = h(type)
            @parent = parent
            @context = context
            @attributes = escape(attributes || {})
            @block = block
            @url = nil # Used by serializer
          end

          def expand!
            extend(_helpers_) if _helpers_
            instance_eval(&@block) if @block
          end

          def url(**context)
            @parent.url(**attributes.merge(context))
          end

          private

          def h(text)
            return text unless text.is_a? String
            CGI::escapeHTML(text)
          end

          def escape(attributes)
            attributes.map {|k, v| [k, h(v)]}.to_h
          end

          protected
          def _helpers_
            @parent.send(:_helpers_)
          end

          def router
            @parent.send(:router)
          end

        end
      end
    end
  end
end
