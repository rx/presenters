require_relative 'mixin_append'

module Voom
  module Presenters
    module DSL
      module Components
        module MixinTypography
          include MixinAppend

          def display(text=nil, **attributes, &block)
            self << Components::Typography.new(parent: self, type: :display, text: text, context: context, **attributes, &block)
          end

          def headline(text=nil, **attributes, &block)
            self << Components::Typography.new(parent: self, type: :headline, text: text, context: context, **attributes, &block)
          end

          def subheading(text=nil, **attributes, &block)
            self << Components::Typography.new(parent: self, type: :subheading, text: text, context: context, **attributes, &block)
          end

          def title(text=nil, **attributes, &block)
            self << Components::Typography.new(parent: self, type: :title, text: text, context: context, **attributes, &block)
          end

          def body(text=nil, **attributes, &block)
            self << Components::Typography.new(parent: self, type: :body, text: text, context: context, **attributes, &block)
          end
        end
      end
    end
  end
end
