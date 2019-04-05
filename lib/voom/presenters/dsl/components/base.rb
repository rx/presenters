require 'securerandom'

require 'voom/serializer'
require 'voom/trace'
require 'voom/presenters/dsl/lockable'
require 'voom/presenters/dsl/components/mixins/yield_to'
require 'voom/presenters/pluggable'

module Voom
  module Presenters
    module DSL
      module Components
        # Every object in the POM is a node
        # This class provides common base implementation
        class Base
          include Lockable

          include Voom::Serializer
          include LoggerMethods
          include Trace
          include Mixins::YieldTo
          extend Pluggable
          include_plugins(:DSLComponents, :DSLHelpers)

          attr_reader :type, :id, :tag, :attributes

          alias attribs attributes

          def initialize(type:, parent:, id: nil, tag: nil, **attributes, &block)
            @id = h(id) || generate_id
            @tag = tag
            @type = h(type)
            @parent = parent
            @attributes = escape(attributes)
            @block = block
            initialize_plugins
          end

          def expand!
            extend(_helpers_) if _helpers_
            instance_eval(&@block) if @block
          end

          private

          def initialize_plugins
            self.class.include_plugins(:DSLComponents, :DSLHelpers, plugins: _plugins_)
          end

          def h(text)
            return text unless text.is_a? String
            CGI::escapeHTML(text)
          end

          def escape(attributes)
            attributes.map {|k, v| [k, h(v)]}.to_h
          end

          def generate_id
            Voom::Presenters::Settings.config.presenters.id_generator.call(self)
          end

          protected

          def parent(for_type)
            return @parent if @parent.type == for_type
            @parent.send(:parent, for_type)
          end

          def router
            @parent.send(:router)
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
