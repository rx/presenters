require_relative 'append'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Typography
            include Mixins::Append

            def display(text=nil, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :display, text: text, context: context, **attributes, &block)
            end
            alias heading display

            def headline(text=nil, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :headline, text: text, context: context, **attributes, &block)
            end


            def title(text=nil, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :title, text: text, context: context, **attributes, &block)
            end

            def subheading(text=nil, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :subheading, text: text, context: context, **attributes, &block)
            end

            def body(text=nil, **attributes, &block)
              self << Components::Typography.new(parent: self, type: :body, text: text, context: context, **attributes, &block)
            end
          end
        end
      end
    end
  end
end
