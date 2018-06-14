require_relative 'append'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Typography
            include Mixins::Append

            def display(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :display, text: text, context: context, **attributes, &block)
            end
            alias heading display

            def headline(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :headline, text: text, context: context, **attributes, &block)
            end

            def title(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :title, text: text, context: context, **attributes, &block)
            end

            def page_title(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :page_title, text: text, context: context, level: 1, **attributes, &block)
            end

            def subheading(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :subheading, text: text, context: context, **attributes, &block)
            end

            def body(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: text, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
