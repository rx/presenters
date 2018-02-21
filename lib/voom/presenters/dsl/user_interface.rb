require 'ice_nine'
require_relative 'definer'
require_relative 'components/common'
require_relative 'invalid_presenter'

require 'voom/serializer'
require 'voom/trace'


module Voom
  module Presenters
    module DSL
      class UserInterface
        include DSL::Definer
        include DependsOn
        include Lockable
        include Components::MethodMissing
        include Components::Common

        include Voom::Serializer
        include Voom::Trace

        attr_reader :router, :context, :components, :dialogs
        private :context, :router
        alias params context

        def initialize(parent: nil, router: nil, context:, &block)
          @parent = parent
          @router = router || @parent&.send(:router)
          @context = context
          @block = block
          @page_title = nil
          @header = nil
          @drawer = nil
          @components = []
          @dialogs = []
          @footer = nil
        end

        def page_title(title=nil)
          return @page_title if locked?
          @page_title = title
        end

        def header(title=nil, **attribs, &block)
          return @header if locked?
          @header = Components::Header.new(parent: self, title: title,
                                           context: context,
                                           **attribs, &block)
        end

        def drawer(name=nil, **attribs, &block)
          return @drawer if locked?
          @drawer = Components::Drawer.new(parent: self, name: name,
                                           context: context,
                                           **attribs, &block)
        end

        def footer(**attribs, &block)
          return @footer if locked?
          @footer = Components::Footer.new(parent: self,
                                           context: context,
                                           **attribs, &block)
        end

        def dialog(**attributes, &block)
          @dialogs << Components::Dialog.new(parent: self,
                                             context: context,
                                             **attributes, &block)
        end


        def helpers(module_=nil, &block)
          return unless module_ || block
          @parent.helpers(module_, &block) if @parent
          @helpers ||= Module.new
          @helpers.include module_ if module_
          @helpers.module_eval(&block) if block
          extend(@helpers)
        end


        def attach(presenter, **context_, &yield_block)
          @_yield_block_ = yield_block
          pom = Voom::Presenters[presenter].call.expand_child(parent: self, context: context.merge(context_))
          @header ||= pom.header
          @drawer ||= pom.drawer
          @footer ||= pom.footer
          @components += pom.components
          @dialogs += pom.dialogs if @dialogs
        end

        # Called by the definition.expand method to evaluate a user interface with a different context
        # This should be made unavailable to the dsl
        def expand_instance(freeze: true)
          instance_eval(&@block)
          lock!
          deep_freeze if freeze
          self
        end

        def url(**context_)
          return '#' unless @router
          context = context_.dup
          link_to = context.delete(:render)
          post_to = context.delete(:command)
          @router.url(render: link_to, command: post_to, context: context)
        end

        private

        def deep_freeze
          IceNine.deep_freeze(self)
          self
        end

        protected

        def _helpers_
          return @helpers if @helpers
          @parent.send(:_helpers_) if @parent
        end

        def yield_block
          return @_yield_block_ if @_yield_block_
          @parent.send(:yield_block) if @parent
        end
      end
    end
  end
end

