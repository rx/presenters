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

          def display(text=nil, **options, &block)
            self << Components::Typography.new(text: text, router: router, context: context,
                                            dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def headline(text=nil, **options, &block)
            self << Components::Typography.new(type: :headline, text: text, router: router, context: context,
                                             dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def subheading(text=nil, **options, &block)
            self << Components::Typography.new(type: :subheading, text: text, router: router, context: context,
                                               dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def title(text=nil, **options, &block)
            self << Components::Title.new(text: text, router: router, context: context,
                                               dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def body(text=nil, **options, &block)
            self << Components::Typography.new(type: :body, text: text, router: router, context: context,
                                              dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def badge(badge=nil, **options, &block)
            self << Components::Badge.new(badge: badge, router: router, context: context,
                                          dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def card(**options, &block)
            self << Components::Card.new(router: router, context: context,
                                         dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def button(text=nil, **options, &block)
            self << Components::Button.new(text: text, router: router, context: context,
                                           dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def dialog(**options, &block)
            @dialogs << Components::Dialog.new(router: router, context: context,
                                               dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def grid(color: nil, **options, &block)
            self << Components::Grid.new(color: color, router: router, context: context,
                                         dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def form(id: nil, **options, &block)
            self << Components::Form.new(id: id, router: router, context: context,
                                         dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def list(**options, &block)
            self << Components::List.new(router: router, context: context,
                                         dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def menu(**options, &block)
            self << Components::Menu.new(router: router, context: context,
                                         dependencies: @dependencies, helpers: @helpers, **options, &block)
          end

          def table(**options, &block)
            self << Components::Table.new(router: router, context: context,
                                          dependencies: @dependencies, helpers: @helpers, **options, &block)
          end
        end
      end
    end
  end
end
