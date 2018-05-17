require_relative 'lists/line'
require_relative 'lists/separator'
require_relative 'mixins/content'
require_relative 'mixins/append'

module Voom
  module Presenters
    module DSL
      module Components
        class List < Base
          include Mixins::Content
          include Mixins::Append
          
          attr_reader :lines, :lines_only, :selectable, :total_lines
          attr_accessor :components
          
          def initialize(**attribs_, &block)
            super(type: :list, context: context,
                  **attribs_, &block)
            @lines_only = attribs.delete(:lines_only) || false
            @selectable = attribs.delete(:selectable) || false
            @lines = []
            @components = []
            @total_lines = attribs.delete(:total_lines) || 0
            add_select_control!( attribs.fetch(:select_control_label) { 'Select All' } )
            expand!
          end

          def add_select_control!(text)
            return unless @selectable && !@lines_only
            @lines << Lists::Header.new(parent: self,
                                        context: context,
                                        total_lines: @total_lines,
                                        checkbox: {text: text, class_name: 'v-checkbox--select-control'})
          end

          def line(text=nil, **attribs, &block)
            @lines << Lists::Line.new(parent:self, context: context, text: text, selectable: selectable, **attribs, &block)
          end

          def separator(**attribs, &block)
            @lines << Lists::Separator.new(parent:self, context: context, **attribs, &block)
          end
        end
      end
    end
  end
end


