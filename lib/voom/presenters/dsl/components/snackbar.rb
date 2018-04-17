module Voom
  module Presenters
    module DSL
      module Components
        class Snackbar < Base
          attr_accessor :text

          def initialize(**attribs_, &block)
            super(type: :snackbar, **attribs_, &block)
            @text = attribs.delete(:text)
            expand!
          end

          def action(text=nil, **params, &block)
            return @action if locked?
            @action = Action.new(parent: self, text: text, context: params, &block)
          end

          class Action < EventBase
            attr_accessor :text

            def initialize(**attribs_, &block)
              super(type: :snackbar, **attribs_, &block)
              @text = attribs.delete(:text)
              expand!
            end
          end
        end
      end
    end
  end
end
