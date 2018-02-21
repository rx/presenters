require_relative 'list_action'

module Voom
  module Presenters
    module DSL
      module Components
        class List < Base

          attr_reader :lines
          def initialize(**attribs, &block)
            @lines = []
            super(type: :list, **attribs, &block)
            expand!
          end
          
          def line(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @lines << Line.new(parent:self, text: the_text, **attribs, &block)
          end

          class Line < Base
            attr_accessor :text, :icon, :avatar, :actions

            def initialize(**attribs_, &block)
              super(type: :line, **attribs_, &block)
              @text = attribs.delete(:text)
              @icon = attribs.delete(:icon)
              @avatar = attribs.delete(:avatar)
              @actions = []
              expand!
            end

            def subtitle(subtitle = nil)
              return @subtitle if locked?
              @subtitle = subtitle
            end

            def info(info=nil)
              return @info if locked?
              @info = info
            end

            def body(body = nil)
              return @body if locked?
              @body = body
            end

            def action(**attribs, &block)
              @actions << ListAction.new(parent: self,
                                           **attribs, &block)
            end
          end
        end
      end
    end
  end
end


