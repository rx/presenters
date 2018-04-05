require_relative '../event'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Event
            attr_reader :events
            def event(event, **params, &block)
              @events ||= []
              @events << Components::Event.new(parent: self, event: event, context: context.merge(params), &block)
            end
          end
        end
      end
    end
  end
end
