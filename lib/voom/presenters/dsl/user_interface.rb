require 'ice_nine'
require_relative 'definer'
require_relative 'components/mixins/common'
require_relative 'components/mixins/helpers'
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
        include Components::Mixins::Common
        include Components::Mixins::Helpers

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
          @snackbar = nil
          @footer = nil
        end
        
        def page(title=nil, **attribs, &block)
          return @page if locked?
          @page = Components::Page.new(parent: self, context: context,
                                        **attribs, &block)
        end

        def header(title=nil, **attribs, &block)
          return @header if locked?
          @header = Components::Header.new(parent: self, title: title,
                                           context: context,
                                           **attribs, &block)
        end

        def drawer(name=nil, **attribs, &block)
          return @drawer if locked?
          @drawer = Components::Drawer.new(parent: self, title: name,
                                           context: context,
                                           **attribs, &block)
        end

        def snackbar(text=nil, **attribs, &block)
          return @snackbar if locked?
          @snackbar = Components::Snackbar.new(parent: self,
                                               text: text,
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
          link_to = context.delete(:link)
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

