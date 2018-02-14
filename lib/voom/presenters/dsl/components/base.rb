require_relative 'method_missing'
require_relative 'render'
require 'voom/serializer'
require 'securerandom'
require 'voom/trace'

module Voom
  module Presenters
    module DSL
      module Components
        class Base
          include Components::MethodMissing
          include Components::Render
          include Voom::Serializer
          include LoggerMethods
          include Trace

          attr_reader :id, :type, :attributes, :entity, :context, :components, :router
          private     :context, :router, :entity
          
          alias attribs attributes
          attr_accessor :type

          def initialize(id: nil, entity: nil, type:, router:, context:, dependencies:, helpers:, **attributes, &block)
            @id = id  || SecureRandom.hex
            @type = type
            @router = router
            @context = context
            @dependencies = dependencies
            @entity = entity
            @attributes = attributes || {}
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
            @router.url(render: @attributes[:render], command: @attributes[:command], context: @context, entity: entity)
          end

          def errors(context:, id:, router:, **_)
            errors = context.dig(:errors, id.to_sym)
            join(errors, router: router)
          end

          def hints(context:, id:, router:, **_)
            hints = context.dig(:hints, id.to_sym)
            join(hints, router: router)
          end

          def command(command: nil, **_)
            return unless command
            cmd_item = Commands.resolve(command, fully:false)
            cmd_item.call
          end

          def modal(**options, &block)
            @components << Components::Modal.new(router: router, context: context,
                                          dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          private

          def join(array, router:, **_)
            array.join(router.join_errors) if array
          end
        end
      end
    end
  end
end
