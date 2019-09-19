require 'voom/presenters/dsl/components/mixins/chips'

module Voom
  module Presenters
    module DSL
      module Components
        class Chipset < Base
          include Mixins::Chips
          attr_reader :variant, :components

          VALID_VARIANTS = %i[choice filter input].freeze

          def initialize(chipset_variant = nil, **attribs_, &block)
            super(type: :chipset, **attribs_, &block)
            @variant = validate_variant(chipset_variant)
            @components = []
            expand!
          end

          private

          def validate_variant(chipset_variant)
            return unless chipset_variant
            chipset_variant = chipset_variant.to_sym
            unless VALID_VARIANTS.include?(chipset_variant)
              raise Errors::ParameterValidation, "Invalid chipset variant specified: #{chipset_variant}"
            end
            chipset_variant
          end

        end
      end
    end
  end
end
