require_relative 'depends_on'
require_relative 'components/base'
require_relative 'components/action'
require_relative 'components/heading'
require_relative 'components/paragraph'
require_relative 'components/form'
require_relative 'components/list'
require_relative 'components/button'
require_relative 'components/modal'
require_relative 'components/menu'
require_relative 'components/layout'

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
