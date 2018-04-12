module Voom
  module Presenters
    module DSL
      module Components
        class ExpansionPanel < Base
          include Mixins::Event
          include Mixins::Common
          include Mixins::Helpers

          def initialize(**attribs_, &block)
            super(type: :expansion_panel, **attribs_, &block)
            expand!
          end

          def text(text = nil, **attribs, &block)
            return @text if locked?
            @text = Components::Typography.new(parent: self, type: :text, text: text, context: context, **attribs, &block)
          end

          def secondary_text(text = nil, **attribs, &block)
            return @secondary_text if locked?
            @secondary_text = Components::Typography.new(parent: self, type: :text, text: text, context: context, **attribs, &block)
          end

          def content(**attribs, &block)
            return @content if locked?
            @content = Content.new(parent: self, context: context, **attribs, &block)
          end

          class Content < Base
            include Mixins::Event
            include Mixins::Common
            include Mixins::Helpers
            include Mixins::Attaches

            attr_accessor :components

            def initialize(**attribs_, &block)
              super(type: :content, **attribs_, &block)
              @components = []
              expand!
            end
          end
        end
      end
    end
  end
end
