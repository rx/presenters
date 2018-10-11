require_dependency 'voom/presenters/dsl/components/mixins/common'
require_dependency 'voom/presenters/dsl/components/mixins/attaches'

module Voom
  module Presenters
    module DSL
      module Components
        class ExpansionPanel < EventBase
          include Mixins::Common

          attr_accessor :open

          def initialize(**attribs_, &block)
            super(type: :expansion_panel, **attribs_, &block)
            self.text(attribs.delete(:text)) if attribs.key?(:text)
            self.secondary_text(attribs.delete(:secondary_text)) if attribs.key?(:secondary_text)
            @open = attribs.delete(:open) { false }
            expand!
          end

          def text(*text, **attribs, &block)
            return @text if locked?
            @text = Components::Typography.new(parent: self, type: :text, text: text, **attribs, &block)
          end

          def secondary_text(*text, **attribs, &block)
            return @secondary_text if locked?
            @secondary_text = Components::Typography.new(parent: self, type: :text, text: text,  **attribs, &block)
          end

          def content(**attribs, &block)
            return @content if locked?
            @content = Content.new(parent: self, **attribs, &block)
          end

          class Content < EventBase
            include Mixins::Common
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
