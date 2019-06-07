require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Image < EventBase
          include Mixins::Tooltips

          VALID_FIT_TYPES = %i[contain cover fill fit].freeze
          DEFAULT_POSITION = :center

          attr_accessor :image,
                        :description,
                        :url,
                        :min_height,
                        :height,
                        :max_height,
                        :min_width,
                        :width,
                        :max_width,
                        :border,
                        :border_radius,
                        :fit,
                        :position

          def initialize(**attribs_, &block)
            super(type: :image, **attribs_, &block)

            @image = attribs.delete(:image)
            @description = attribs.delete(:description)

            @min_width = validate_size(attribs.delete(:min_width))
            @width = validate_size(attribs.delete(:width))
            @max_width = validate_size(attribs.delete(:max_width))

            @min_height = validate_size(attribs.delete(:min_height))
            @height = validate_size(attribs.delete(:height))
            @max_height = validate_size(attribs.delete(:max_height))

            @border = attribs.delete(:border)
            @border_radius = attribs.delete(:border_radius)

            @fit = validate_fit(attribs.delete(:fit) { :contain })
            @position = Array(attribs.delete(:position) { DEFAULT_POSITION }).compact

            @url = build_url

            expand!
          end

          private

          def build_url
            return unless image
            return image if image.start_with?('/') || image.start_with?('http')

            @parent.router.url(render: image, context: {})
          end

          def validate_fit(fit)
            return unless fit

            fit = fit.to_sym

            unless VALID_FIT_TYPES.include?(fit)
              raise Errors::ParameterValidation, "Invalid image fit specified: #{fit}" 
            end

            fit
          end

          # Ensure all size values have a unit, defaulting to pixels.
          def validate_size(value)
            return unless value
            return "#{value}px" if value.to_s.match?(/\A\d+\Z/)

            value
          end
        end
      end
    end
  end
end
