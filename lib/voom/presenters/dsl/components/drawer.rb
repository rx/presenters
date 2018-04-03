require_relative 'mixins/common'

module Voom
  module Presenters
    module DSL
      module Components
        class Drawer < Base
          include Mixins::Common

          attr_accessor :title, :components

          def initialize(**attribs_, &block)
            super(type: :drawer, **attribs_, &block)
            @title = attribs.delete(:title)
            @components = []

            expand!
          end

          def menu(**attribs, &block)
            return @menu if locked?
            @menu = Menu.new(parent: self, context: context,
                             **attribs, &block)
          end

          def attach(presenter, **params, &block)
            pom = Voom::Presenters::App[presenter].call.expand_child(parent: self, context: context.merge(params), &block)
            @menu = pom.components.select{|i| i.type==:menu}.first
          end

        end
      end
    end
  end
end
