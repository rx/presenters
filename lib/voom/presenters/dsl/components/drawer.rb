require 'voom/presenters/dsl/components/mixins/common'
require 'voom/presenters/dsl/components/mixins/attaches'

module Voom
  module Presenters
    module DSL
      module Components
        class Drawer < Base
          include Mixins::Common
          include Mixins::Attaches

          attr_accessor :title, :components

          def initialize(**attribs_, &block)
            super(type: :drawer, **attribs_, &block)
            self.title(attribs.delete(:title)) if attribs.key?(:title)
            @components = []

            expand!
          end

          def menu(**attribs, &block)
            return @menu if locked?
            @menu = Menu.new(parent: self,
                             **attribs, &block)
          end

          def attach(presenter, **params, &block)
            pom = super
            @menu = pom.components.select {|i| i.type==:menu}.first
          end

          def title(*text, **attribs, &block)
            return @title if locked?
            @title = Components::Typography.new(parent: self, type: :text, text: text, **attribs, &block)
          end

        end
      end
    end
  end
end
