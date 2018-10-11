require_dependency 'voom/presenters/dsl/components/mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        class EventBase < Base
          include Mixins::Event
          attr_reader :event_parent_id

          def initialize(**attribs_, &block)
            super(type: :icon, 
                  **attribs_, &block)
            @event_parent_id = @id
          end
        end
      end
    end
  end
end
