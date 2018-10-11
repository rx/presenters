require_dependency 'voom/presenters/dsl/components/base'
require_dependency 'voom/presenters/dsl/components/event_base'
Dir[__dir__ + "/components/*.rb"].each {|file| require file }

module Voom
  module Presenters
    module DSL
      # The default dsl for ui
      module Definer
      end
    end
  end
end
