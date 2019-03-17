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

            def headline1(*text, level: nil, **attributes, &block)
              headline(*text, level: 1, **attributes, &block)
            end
            alias heading1 headline1

            def headline2(*text, level: nil, **attributes, &block)
              headline(*text, level: 2, **attributes, &block)
            end
            alias heading2 headline2

            def headline3(*text, level: nil, **attributes, &block)
              headline(*text, level: 3, **attributes, &block)
            end
            alias heading3 headline3

            def headline4(*text, level: nil, **attributes, &block)
              headline(*text, level: 4, **attributes, &block)
            end
            alias heading3 headline4

            def headline5(*text, level: nil, **attributes, &block)
              headline(*text, level: 5, **attributes, &block)
            end
            alias heading5 headline5

            def headline6(*text, level: nil, **attributes, &block)
              headline(*text, level: 6, **attributes, &block)
            end
            alias heading6 headline6


            alias heading headline
            alias display headline

            def title(*text, level: nil, **attributes, &block)
              headline(text, level: level || Settings.default(:title, :level), **attributes, &block)
            end

            def subtitle(*text, level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :subtitle, text: text, level: level,
                                                 **attributes, &block)
            end
            alias subtitle1 subtitle

            def subtitle2(*text, level: 2, **attributes, &block)
              subtitle(*text, leve: level, **attributes, &block)
            end

            alias subheading subtitle

            def page_title(*text, **attributes, &block)
              self << Components::PageTitle.new(parent: self, text: text, level: 1, **attributes, &block)
            end

            def body(*text, level: 1, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: text, level: level,
                                                 **attributes, &block)
            end

            def text(*text, level: 1, **attributes, &block)
              return @text if defined? @text
              body(*text, level: 1, **attributes, &block)
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
