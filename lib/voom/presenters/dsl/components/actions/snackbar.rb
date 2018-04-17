module Voom
  module Presenters
    module DSL
      module Components
        class Snackbar < Action
          attr_reader :message, :undo

          def initialize(**attribs_, &block)
            super(action_type: :snackbar, **attribs_, &block)
            @message = attribs.delete(:message)
            @undo = attribs.delete(:undo)
          end
        end
      end
    end
  end
end
