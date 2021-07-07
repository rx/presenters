require 'securerandom'

module Coprl
  module Presenters
    module DSL
      module Components
        # Every object in the POM is a node
        # This class provides common base implementation
        class Base
          include Lockable

          include Coprl::Serializer
          include LoggerMethods
          include Trace
          include Mixins::YieldTo
          extend Pluggable

          attr_reader :type, :id, :input_tag, :attributes, :draggable, :drop_zone, :css_class

          alias attribs attributes

          def initialize(type:, parent:, id: nil, tag: nil, input_tag: nil,  **attributes, &block)
            @draggable = attributes.delete(:draggable) {nil}
            @drop_zone = attributes.delete(:drop_zone) {nil}
            @css_class = Array(attributes.delete(:class) {nil})
            @id = id || generate_id
            @input_tag = input_tag || tag
            logger.warn(
                'The `tag` attribute is deprecated. ' \
                'Please use `input_tag` instead. This will change in a future feature release.') unless tag.nil?
            @type = type
            @parent = parent
            @attributes = attributes
            @block = block
            initialize_plugins
          end

          def expand!
            extend(_helpers_) if _helpers_
            instance_eval(&@block) if @block
          end

          private

          def default_url_options
            {}
          end

          def initialize_plugins
            self.class.include_plugins(:DSLComponents, :DSLHelpers, plugins: _plugins_)
          end

          def generate_id
            Coprl::Presenters::Settings.config.presenters.id_generator.call(self)
          end

          protected

          def parent(for_type)
            return @parent if @parent.type == for_type
            @parent.send(:parent, for_type)
          end

          def router
            @parent.send(:router)
          end

          def name
            @parent.send(:name)
          end

          def namespace
            @parent.send(:namespace)
          end

          def context
            @parent.send(:context)
          end

          alias params context


          def yield_block
            return @_yield_block_ if @_yield_block_
            @parent.send(:yield_block)
          end

          def _helpers_
            @parent.send(:_helpers_) if @parent
          end

          def plugin(*plugin_names)
            @parent.send(:plugin, *plugin_names) if @parent
          end

          def _plugins_
            @parent.send(:_plugins_) if @parent
          end

          def default(key)
            Settings.default(type, key)
          end
        end
      end
    end
  end
end
