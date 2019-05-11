require 'ice_nine'
require 'voom/presenters/dsl/definer'
require 'voom/presenters/dsl/components/mixins/common'
require 'voom/presenters/dsl/components/mixins/helpers'
require 'voom/presenters/dsl/components/mixins/dialogs'
require 'voom/presenters/dsl/components/mixins/snackbars'
require 'voom/presenters/dsl/components/mixins/text_fields'
require 'voom/presenters/dsl/components/mixins/date_time_fields'
require 'voom/presenters/dsl/components/mixins/attaches'
require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/invalid_presenter'
require 'voom/presenters/pluggable'

require 'voom/serializer'
require 'voom/trace'


module Voom
  module Presenters
    module DSL
      class UserInterface
        include DSL::Definer
        include Components::Mixins::Common
        include Components::Mixins::Helpers
        include Components::Mixins::Dialogs
        include Components::Mixins::Snackbars
        include Components::Mixins::Icons
        include Components::Mixins::TextFields
        include Components::Mixins::DateTimeFields
        include Components::Mixins::Attaches
        include Components::Mixins::Event
        extend Pluggable
        include_plugins(:DSLComponents, :DSLHelpers)

        include Voom::Serializer
        include Voom::Trace

        attr_reader :router, :context, :components, :namespace
        private :context, :router, :namespace
        alias params context

        def initialize(context:, parent: nil, router: nil, namespace: [], &block)
          @parent = parent
          @router = router || @parent&.send(:router)
          @context = context
          @block = block
          @header = nil
          @drawer = nil
          @components = []
          @footer = nil
          @namespace = namespace
          @plugins = []
          add_global_helpers
          initialize_plugins
        end

        def page(title = nil, **attribs, &block)
          return @page if locked?
          @page = Components::Page.new(parent: self, **attribs, &block)
        end

        def header(title = nil, **attribs, &block)
          return @header if locked?
          @header = Components::Header.new(parent: self, title: title,
                                           **attribs, &block)
        end

        def drawer(name = nil, **attribs, &block)
          return @drawer if locked?
          @drawer = Components::Drawer.new(parent: self, title: name,
                                           **attribs, &block)
        end


        def footer(**attribs, &block)
          return @footer if locked?
          @footer = Components::Footer.new(parent: self,
                                           **attribs, &block)
        end

        def progress(**attributes, &block)
          self << Components::Progress.new(parent: self, **attributes, &block)
        end

        def attach(presenter, **params, &yield_block)
          pom = super
          @header ||= pom.header
          @drawer ||= pom.drawer
          @footer ||= pom.footer
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

        def type
          :presenter
        end

        def plugin(*plugin_names)
          @plugins.push(*plugin_names)
          self.class.include_plugins(:DSLComponents, :DSLHelpers, plugins: plugin_names)
        end

        def plugins
          return @plugins if locked?
          return @plugins if @plugins
        end
        alias _plugins_ plugins

        private

        def deep_freeze
          IceNine.deep_freeze(self) if Presenters::Settings.config.presenters.deep_freeze
          self
        end

        def parent(for_type)
          nil
        end

        def _helpers_
          return @helpers if @helpers
        end

        def yield_block
          return @_yield_block_ if @_yield_block_
          @parent.send(:yield_block) if @parent
        end

        def add_global_helpers
          Presenters::Settings.config.presenters.helpers.each do |helper|
            self.helpers(helper)
          end
        end

        def initialize_plugins
          self.class.include_plugins(:DSLComponents, :DSLHelpers, plugins: @plugins)
        end

        def lock!
          @locked = true
        end

        def locked?
          @locked
        end
      end
    end
  end
end

