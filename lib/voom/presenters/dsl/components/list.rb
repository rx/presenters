require_relative 'list_action'

module Voom
  module Presenters
    module DSL
      module Components
        class List < Base

          def initialize(**attribs, &block)
            @lines = nil
            super(type: :list, **attribs, &block)
            expand!
          end

          def lines
            @components
          end

          def line(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @components << Line.new(text: the_text, router: @router, context: @context,
                                    dependencies: @dependencies, helpers: @helpers, **attribs, &block)
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
              return @subtitle if frozen?
              @subtitle = subtitle
            end

            def info(info=nil)
              return @info if frozen?
              @info = info
            end

            def body(body = nil)
              return @body if frozen?
              @body = body
            end

            def action(**attribs, &block)
              @actions << ListAction.new(router: @router, context: @context,
                                           dependencies: @dependencies,
                                           helpers: @helpers,
                                           **attribs, &block)
            end
          end
        end
      end
    end
  end
end


