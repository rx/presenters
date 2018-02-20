require_relative 'method_missing'
require_relative 'attach'
require 'voom/serializer'
require 'securerandom'
require 'voom/trace'

module Voom
  module Presenters
    module DSL
      module Components
        class Base
          include Components::MethodMissing
          include Components::Attach
          include Voom::Serializer
          include LoggerMethods
          include Trace

          attr_reader :id, :type, :attributes, :context, :components, :router
          private :context, :router

          alias params context
          alias attribs attributes
          attr_accessor :type

          def initialize(id: nil, type:, router:, context:, dependencies:, helpers:, **attributes, &block)
            @id = h(id) || "id-#{SecureRandom.hex}"
            @type = h(type)
            @router = router
            @context = context
            @dependencies = dependencies
            @attributes = escape(attributes || {})
            @block = block
            @helpers = helpers
            @components = []
            @url = nil
          end

          def expand!
            extend(@helpers) if @helpers
            instance_eval(&@block) if @block
          end

          def attribute(attribute, value)
            setter = :"#{attribute}="
            return send(setter, value) if respond_to?(setter)
            @attributes[attribute] = value
          end

          alias attrib attribute

          def url
            return "#" unless @router
            @router.url(render: @attributes[:render], command: @attributes[:command], context: @context)
          end

          def command(command: nil, **_)
            return unless command
            cmd_item = Commands.resolve(command, fully: false)
            cmd_item.call
          end
          
          private

          def h(text)
            return text unless text.is_a? String
            CGI::escapeHTML(text)
          end

          def escape(attributes)
            attributes.map {|k, v| [k, h(v)]}.to_h
          end
        end
      end
    end
  end
end
