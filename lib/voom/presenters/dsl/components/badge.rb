require_relative 'mixins/common'

module Voom
  module Presenters
    module DSL
      module Components
        class Badge < Base
          include Mixins::Link
          attr_accessor :badge, :icon, :text

          def initialize(**attribs_, &block)
            super(type: :badge, **attribs_, &block)
            @badge = attribs.delete(:badge)
            @icon = attribs.delete(:icon)
            @text = attribs.delete(:text)
            expand!
          end
        end
      end
    end
  end
end
