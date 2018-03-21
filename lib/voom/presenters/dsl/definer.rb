require_relative 'components/base'
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
