module Voom
  module Presenters
    module DSL
      module Components
        class Header < Base
          attr_accessor :title, :image, :placement

          VALID_PLACEMENTS = %i[static fixed].freeze

          def initialize(**attribs_, &block)
            super(type: :header,
                  **attribs_, &block)
            self.title(attribs.delete(:title)) if attribs.key?(:title)
            @image = attribs.delete(:image)
            @placement = validate_placement(attribs.delete(:placement) { :static })
            expand!
          end

          def button(icon=nil, **attributes, &block)
            return @button if locked?
            @button = Components::Button.new(icon: icon, parent: self, **attributes, &block)
          end

          def menu(**attribs, &block)
            return @menu if locked?
            @menu = Components::Menu.new(parent: self,
                             **attribs, &block)
          end

          def nav(**attribs, &block)
            return @nav if locked?
            @nav = Components::Menu.new(parent: self,
                                         **attribs, &block)
          end

          def title(*text, **attribs, &block)
            return @title if locked?
            @title = Components::Typography.new(parent: self, type: :text, text: text, **attribs, &block)
          end

          private

          def validate_placement(value)
            return unless value

            placement = value.to_sym

            unless VALID_PLACEMENTS.include?(placement)
              raise Errors::ParameterValidation, "Invalid placement specified: #{placement}" 
            end

            placement
          end
        end
      end
    end
  end
end
