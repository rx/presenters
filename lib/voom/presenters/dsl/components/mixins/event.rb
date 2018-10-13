require 'voom/presenters/dsl/components/event'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Event
            attr_reader :events
            def event(event, &block)
              @events ||= []
              @events << Components::Event.new(parent: self, event: event, &block)
            end
          end
        end
      end
    end
  end
end
