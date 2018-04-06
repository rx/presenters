require_relative 'list_line'
require_relative 'mixins/content'
require_relative 'mixins/append'

module Voom
  module Presenters
    module DSL
      module Components
        class List < Base
          include Mixins::Content
          include Mixins::Append
          
          attr_reader :lines, :lines_only
          attr_accessor :components
          
          def initialize(**attribs_, &block)
            super(type: :list, context: context,
                  **attribs_, &block)
            @lines_only = attribs.delete(:lines_only)||false
            @lines = []
            @components = []
            expand!
          end
          
          def line(**attribs, &block)
            @lines << ListLine.new(parent:self, context: context, **attribs, &block)
          end
        end
      end
    end
  end
end


