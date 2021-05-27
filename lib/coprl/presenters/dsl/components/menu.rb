module Coprl
  module Presenters
    module DSL
      module Components
        class Menu < Base
          attr_accessor :items, :title, :position, :placement, :color, :open, :hoisted

          def initialize(title=nil, **attribs_, &block)
            super(type: :menu, **attribs_, &block)
            @title = title
            @items = []
            @position = attribs.delete(:position){:left}
            @placement = attribs.delete(:placement){:default}
            @color = attribs.delete(:color)
            @open = attributes.delete(:open) {false}
            @hoisted = attributes.delete(:hoisted) {true}
            expand!
          end

          def item(first_text = nil, text: nil, **attribs, &block)
            the_text = first_text || text
            @items << Item.new(parent: self, text: the_text,
                               **attribs, &block)
          end

          def divider(**attribs, &block)
            @items << Divider.new(parent: self,
                                  **attribs, &block)
          end

          def label(**attribs, &block)
            return @label if locked?
            @label = Label.new(parent: self,
                               **attribs, &block)
          end

          private

          module BaseMenuItem
            attr_reader :position, :size, :color

            private

            VALID_POSITIONS = %i[top bottom].freeze
            VALID_SIZES = %i[normal small].freeze

            def validate_position(value)
              return unless value

              v = value.to_sym

              unless VALID_POSITIONS.include?(v)
                raise Errors::ParameterValidation,
                      "Invalid item position! Valid positions include #{VALID_POSITIONS.join(', ')}"
              end

              v
            end

            def validate_size(value)
              return unless value

              v = value.to_sym

              unless VALID_SIZES.include?(v)
                raise Errors::ParameterValidation,
                      "Invalid item size! Valid sizes include #{VALID_SIZES.join(', ')}"
              end

              v
            end
          end

          class Item < EventBase
            include Mixins::Tooltips
            include Mixins::Typography
            include BaseMenuItem

            attr_accessor :text, :disabled, :selected

            def initialize(**attribs_, &block)
              super(type: :item, **attribs_, &block)
              @text = attribs.delete(:text)
              @disabled = attribs.delete(:disabled)
              @selected = attribs.delete(:selected) {false}
              @position = validate_position(attribs.delete(:position) { :top })
              @size = validate_size(attribs.delete(:size) { :normal })
              @color = attribs.delete(:color) { :primary }
              @components = []
              expand!
            end

            def icon(icon=nil, **attribs, &block)
              return @icon if locked?
              @icon = Icon.new(parent: self, icon: icon,
                               **attribs, &block)
            end
          end

          class Label < Item
            def initialize(**attribs, &block)
              super(type: :label, **attribs, &block)
              @position = validate_position(attribs.delete(:position) { :top })
              @size = validate_size(attribs.delete(:size) { :normal })
              @color = attribs.delete(:color) { :primary }
            end
          end

          class Divider < Base
            include BaseMenuItem

            def initialize(**attribs, &block)
              super(type: :divider, **attribs, &block)
              @position = validate_position(attribs.delete(:position) { :top })
              @size = validate_size(attribs.delete(:size) { :normal })
              @color = attribs.delete(:color) { :primary }
            end
          end
        end
      end
    end
  end
end
