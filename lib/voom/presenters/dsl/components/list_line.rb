require_relative 'list_action'

module Voom
  module Presenters
    module DSL
      module Components
        class ListLine < Base
          attr_accessor :text, :avatar, :actions, :separator

          def initialize(**attribs_, &block)
            super(type: :line, **attribs_, &block)
            @text = attribs.delete(:text)
            @icon = attribs.delete(:icon)
            @avatar = attribs.delete(:avatar)
            @separator = attribs.delete(:separator)
            @actions = []
            expand!
          end

          def subtitle(subtitle = nil)
            return @subtitle if locked?
            @subtitle = subtitle
          end

          def icon(icon=nil, **attribs, &block)
            return @icon if locked?
            @icon = Icon.new(parent: self, icon: icon,
                             context: context,
                             **attribs, &block)
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


