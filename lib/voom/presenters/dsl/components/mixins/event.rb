require_relative '../event'

module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Event
            def event(event=nil, **params, &block)
              return @event if locked?
              @event = Components::Event.new(parent: self, event: event, context: context.merge(params), &block)
            end
          end
        end
      end
    end
  end
end
