require 'ice_nine'
require_relative 'definer'
require_relative 'components/render'
require 'voom/serializer'


module Voom
  module Presenters
    module DSL
      class UserInterface
        include DSL::Definer
        include DependsOn
        include Components::MethodMissing
        include Components::Render
        include Voom::Serializer

        attr_reader :router, :context, :content
        private :context, :router, :content

        def components
          # return [] if _layout_ && _layout_.content == @components
          @components
        end

        def _layout_
          @_layout_.respond_to?(:call) ? @_layout_.call : @_layout_
        end

        def load_named_layout(name)
          return -> {} unless Voom::Presenters.registered?(name)
          ui = Voom::Presenters[name].call
          -> {ui.render(router: router, context: context, content: content||@components)._layout_}
        end

        def initialize(router:, context:, content: nil, layout_name: nil, &block)
          @router = router
          @context = context
          @components = []
          @_layout_ = load_named_layout(layout_name || 'layouts.default')
          @content = content
          @block = block
        end

        def <<(comp)
          @components << comp
        end

        def heading(text=nil, **options, &block)
          self << Components::Heading.new(text: text, router: router, context: context,
                                          dependencies: @dependencies, helpers: @helpers, **options, &block)
        end

        def paragraph(text=nil, **options, &block)
          self << Components::Paragraph.new(text: text, router: router, context: context,
                                            dependencies: @dependencies, helpers: @helpers, **options, &block)
        end

        def button(text=nil, **options, &block)
          self << Components::Button.new(text: text, router: router, context: context,
                                         dependencies: @dependencies, helpers: @helpers, **options, &block)
        end
        
        def form(id:nil, **options, &block)
          self << Components::Form.new(id: id, router: router, context: context,
                                       dependencies: @dependencies, helpers: @helpers, **options, &block)
        end

        def list(**options, &block)
          self << Components::List.new(router: router, context: context,
                                       dependencies: @dependencies, helpers: @helpers, **options, &block)
        end

        def menu(**options, &block)
          self << Components::Menu.new(router: router, context: context,
                                       dependencies: @dependencies, helpers: @helpers, **options, &block)
        end

        def layout(name=nil, **options, &block)
          return @_layout_ if frozen?
          @_layout_ = Components::Layouts::Layout.new(name: name,
                                                      router: router,
                                                      context: context,
                                                      content: content || @components,
                                                      dependencies: @dependencies, helpers: @helpers, **options, &block) if block
          @_layout_ = load_named_layout(name) if name && !block
        end

        def helpers(module_=nil, &block)
          return unless module_ || block
          @helpers ||= Module.new
          @helpers.include module_ if module_
          @helpers.module_eval(&block) if block
          extend(@helpers)
        end

        # Called by the definition.render method to evaluate a user interface with a different context
        # This should be made unavailable to the dsl
        def render_instance
          instance_eval(&@block)
          yield(self) if block_given?
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

