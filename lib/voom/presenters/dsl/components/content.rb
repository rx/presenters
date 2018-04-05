require_relative 'menu'
require_relative 'mixins/common'
require_relative 'mixins/event'
require_relative 'mixins/helpers'
require_relative 'mixins/attaches'

module Voom
  module Presenters
    module DSL
      module Components
        class Content < Base
          include Mixins::Event
          include Mixins::Common
          include Mixins::Helpers
          include Mixins::Attaches

          attr_accessor :components

          def initialize(**attribs_, &block)
            super(type: :content, **attribs_, &block)
            @components = []
            expand!
          end
        end
      end
    end
  end
end
