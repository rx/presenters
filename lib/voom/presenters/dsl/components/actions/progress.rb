require 'voom/presenters/dsl/components/actions/base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Progress
            def initialize(progress_bar_id, events, &block)
              unless block
                raise Errors::InvalidDsl, <<~ERR
                  You must pass a block to the progress action inside an event.
                  Example:
                  event :click do
                    progress do
                      post /somewhere
                    end
                  end
                ERR
              end
              events.show(progress_bar_id)
              events.instance_eval(&block)
            end
          end
        end
      end
    end
  end
end
