require_relative 'depends_on'
require_relative 'components/base'
Dir[__dir__ + "/components/*.rb"].each {|file| require file }

module Voom
  module Presenters
    module DSL
      # The default dsl for ui
      # You can override this using the UI.config.dsl.definition setting.
      module Definer
      end
    end
  end
end
