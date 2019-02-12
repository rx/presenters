require 'voom/presenters/dsl/components/mixins/append'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Typography
            include Mixins::Append

            def headline(*text, level: nil, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :headline, text: text,
                                                 level: level || Settings.default(:headline, :level),
                                                 **attributes, &block)
            end

            alias heading headline
            alias display headline

            def title(*text, level: nil, **attributes, &block)
              headline(text, level: level || Settings.default(:title, :level), **attributes, &block)
            end

            def subtitle(*text, level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :subtitle, text: text, level: level,
                                                 **attributes, &block)
            end

            alias subheading subtitle

            def page_title(*text, **attributes, &block)
              self << Components::PageTitle.new(parent: self, text: text, level: 1, **attributes, &block)
            end

            def body(*text, level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: text, level: level,
                                                 **attributes, &block)
            end

            def blank(level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: ['&nbsp;'], level: level,
                                                 **attributes, &block)
            end

            def caption(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :caption, text: text,
                                                 **attributes, &block)
            end

            def overline(*text, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :overline, text: text,
                                                 **attributes, &block)
            end

            def separator(**attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: ['---'],
                                                 **attributes, &block)
            end

            def link(text, url, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: ["[#{text}](#{url})"],
                                                 **attributes, &block)
            end
          end
        end
      end
    end
  end
end
