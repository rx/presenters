require_relative 'append'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Typography
            include Mixins::Append

            def headline(*text, level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :headline, text: text, level: level,
                                                 context: context, **attributes, &block)
            end

            alias heading headline
            alias display headline

            def title(*text, level: 6, **attributes, &block)
              headline(text, level: level, **attributes, &block)
            end

            def subtitle(*text, level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :subtitle, text: text, level: level, context: context, **attributes, &block)
            end

            alias subheading subtitle

            def page_title(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :page_title, text: text, context: context, level: 1, **attributes, &block)
            end

            def body(*text, level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: text, level: level, context: context, **attributes, &block)
            end

            def caption(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :caption, text: text, context: context, **attributes, &block)
            end

            def overline(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :overline, text: text, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
