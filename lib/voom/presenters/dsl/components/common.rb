require_relative 'switches'

module Voom
  module Presenters
    module DSL
      module Components
        module Common
          include Switches

          def <<(comp)
            @components << comp
          end

          def display(text=nil, **attributes, &block)
            self << Components::Typography.new(parent:self, text: text, context: context, **attributes, &block)
          end

          def headline(text=nil, **attributes, &block)
            self << Components::Typography.new(parent:self, type: :headline, text: text,  context: context, **attributes, &block)
          end

          def subheading(text=nil, **attributes, &block)
            self << Components::Typography.new(parent:self, type: :subheading, text: text,  context: context, **attributes, &block)
          end

          def title(text=nil, **attributes, &block)
            self << Components::Title.new(parent:self, text: text, context: context, **attributes, &block)
          end

          def body(text=nil, **attributes, &block)
            self << Components::Typography.new(parent:self, type: :body, text: text, context: context, **attributes, &block)
          end

          def badge(badge=nil, **attributes, &block)
            self << Components::Badge.new(parent: self, badge: badge, context: context, **attributes, &block)
          end

          def card(**attributes, &block)
            self << Components::Card.new(parent: self, context: context, **attributes, &block)
          end

          def button(text=nil, **attributes, &block)
            self << Components::Button.new(text: text, parent: self, context: context, **attributes, &block)
          end
          
          def grid(color: nil, **attributes, &block)
            self << Components::Grid.new(parent: self, color: color, context: context, **attributes, &block)
          end

          def form(id: nil, **attributes, &block)
            self << Components::Form.new(parent: self, id: id, context: context, context: context, **attributes, &block)
          end

          def list(**attributes, &block)
            self << Components::List.new(parent: self,
                                         context: context, **attributes, &block)
          end

          def menu(**attributes, &block)
            self << Components::Menu.new(parent: self, context: context, **attributes, &block)
          end

          def table(**attributes, &block)
            self << Components::Table.new(parent: self, context: context, **attributes, &block)
          end

          def yield_to
            trace { "yield_to #{@parent.yield_block}" }
            instance_eval(&@parent.yield_block)if @parent.yield_block
          end
        end
      end
    end
  end
end
