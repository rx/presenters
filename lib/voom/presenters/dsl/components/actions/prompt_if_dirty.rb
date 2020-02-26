module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class PromptIfDirty < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :prompt_if_dirty, **attribs_, &block)
            end
          end
        end
      end
    end
  end
end
