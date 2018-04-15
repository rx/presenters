require_relative 'mixins/common'
require_relative 'mixins/helpers'
require_relative 'mixins/images'
require_relative 'mixins/icons'
require_relative 'mixins/event'
require_relative 'mixins/attaches'
require_relative 'mixins/dialogs'
require_relative 'mixins/chips'

module Voom
  module Presenters
    module DSL
      module Components
        class Grid < Base
          include Mixins::Helpers
          include Mixins::Attaches
          include Mixins::Dialogs
          
          attr_accessor :columns, :color, :padded

          def initialize(color: nil, **attribs_, &block)
            super(type: :grid, **attribs_, &block)
            @columns = []
            @color = h(color)
            @padded = attribs.delete(:padded)
            expand!
          end

          def column(size, color: nil, **attribs, &block)
            attribs = size.respond_to?(:keys) ? attribs.merge(size) : attribs.merge(size: size)
            @columns << Column.new(parent: self, color: color,
                                   context: context, **attribs, &block)
          end

          class Column < Base
            include Mixins::Common
            include Mixins::Helpers
            include Mixins::Images
            include Mixins::Icons
            include Mixins::Event
            include Mixins::Attaches
            include Mixins::Dialogs
            include Mixins::Chips

            attr_reader :size, :desktop, :tablet, :phone, :color, :components

            def initialize(**attribs_, &block)
              super(type: :column, **attribs_, &block)
              @size = attribs.delete(:size) || 1
              @desktop = attribs.delete(:desktop)
              @tablet = attribs.delete(:tablet)
              @phone = attribs.delete(:phone)
              @color = attribs.delete(:color)
              @components = []
              expand!
            end
          end
        end
      end
    end
  end
end
