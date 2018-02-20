require 'ice_nine'
require_relative 'definer'
require_relative 'components/common'
require_relative 'components/attach'
require 'voom/serializer'
require 'voom/trace'



module Voom
  module Presenters
    module DSL
      class UserInterface
        include DSL::Definer
        include DependsOn
        include Components::MethodMissing
        include Components::Attach
        include Components::Common
        include Voom::Serializer
        include Voom::Trace

        attr_reader :router, :context, :components, :dialogs
        private :context, :router
        alias params context

        def initialize(router:, context:, attached_block: nil, &block)
          @router = router
          @context = context
          @block = block
          @page_title  = nil
          @header = nil
          @drawer = nil
          @components = []
          @dialogs = []
          @footer = nil
          @attached_block = attached_block
        end

        def page_title(title=nil)
          return @page_title if frozen?
          @page_title = title
        end

        def header(title=nil, **attribs, &block)
          return @header if frozen?
          @header = Components::Header.new(title: title, router: @router, context: @context,
                                           dependencies: @dependencies, helpers: @helpers, **attribs, &block)
        end

        def drawer(name=nil, **attribs, &block)
          return @drawer if frozen?
          @drawer = Components::Drawer.new(name: name, router: @router, context: @context,
                                           dependencies: @dependencies, helpers: @helpers, **attribs, &block)
        end

        def footer(**attribs, &block)
          return @footer if frozen?
          @footer = Components::Footer.new(router: @router, context: @context,
                                           dependencies: @dependencies, helpers: @helpers, **attribs, &block)
        end

        def helpers(module_=nil, &block)
          return unless module_ || block
          @helpers ||= Module.new
          @helpers.include module_ if module_
          @helpers.module_eval(&block) if block
          extend(@helpers)
        end
        
        # Called by the definition.expand method to evaluate a user interface with a different context
        # This should be made unavailable to the dsl
        def expand_instance
          instance_eval(&@block)
          deep_freeze
        end

        private

        def deep_freeze
          IceNine.deep_freeze(self)
          self
        end
      end
    end
  end
end

