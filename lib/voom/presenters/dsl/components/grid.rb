require_relative 'mixins/common'
require_relative 'mixins/helpers'
require_relative 'mixins/images'
require_relative 'mixins/icons'
require_relative 'mixins/event'

module Voom
  module Presenters
    module DSL
      module Components
        class Grid < Base
          include Mixins::Helpers

          attr_accessor :columns, :color, :padded

          def initialize(color: nil, **attribs_, &block)
            super(type: :grid, **attribs_, &block)
            @columns = []
            @color = h(color)
            @padded = attribs.delete(:padded)
            expand!
          end

          def column(size, color: nil, **attribs, &block)
            @columns << Column.new(parent: self, size: size, color: color,
                                   context: context, **attribs, &block)
          end

          def attach(presenter, **context_, &yield_block)
                        @_yield_block_ = yield_block
                        pom = Voom::Presenters::App[presenter].call.expand_child(parent: self, context: context.merge(context_))
                        @components += pom.components
                      end

          class Column < Base
            include Mixins::Common
            include Mixins::Helpers
            include Mixins::Images
            include Mixins::Icons
            include Mixins::Event

            attr_accessor :size, :color, :components

            def initialize(**attribs_, &block)
              super(type: :column, **attribs_, &block)
              @size = attribs.delete(:size) || 1
              @color = attribs.delete(:color)
              @components = []
              expand!
            end


            def attach(presenter, **context_, &yield_block)
              @_yield_block_ = yield_block
              pom = Voom::Presenters::App[presenter].call.expand_child(parent: self, context: context.merge(context_))
              @components += pom.components
            end
          end
        end
      end
    end
  end
end
