require_relative 'mixin_link'

module Voom
  module Presenters
    module DSL
      module Components
        class Avatar < Base
          include MixinLink
          attr_accessor :avatar

          def initialize(**attribs_, &block)
            super(type: :avatar, context: context,
                  **attribs_, &block)
            @avatar = attribs.delete(:avatar)
            expand!
          end
        end
      end
    end
  end
end
