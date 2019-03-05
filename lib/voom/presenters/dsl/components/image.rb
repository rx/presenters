require 'voom/presenters/dsl/components/mixins/event'
require 'voom/presenters/dsl/components/mixins/tooltips'

module Voom
  module Presenters
    module DSL
      module Components
        class Image < EventBase
          include Mixins::Tooltips
          attr_accessor :image, :height, :width, :position, :selected, :url, :border, :border_radius, :fit
          VALID_FIT_TYPES = [:cover, :fill, :contain, nil].freeze

          def initialize(**attribs_, &block)
            super(type: :image,
                  **attribs_, &block)
            @image = attribs.delete(:image)
            @height = attribs.delete(:height)
            @width = attribs.delete(:width)
            @position = Array(attribs.delete(:position)).compact
            @selected = attribs.delete(:selected)
            @border = attribs.delete(:border){0}
            @border_radius = attribs.delete(:border_radius){nil}
            @fit = attribs.delete(:fit){nil}
            raise_parameter_validation "Invalid Image Fit Type specified: #{fit}" unless VALID_FIT_TYPES.include? fit
            @url = build_url
            expand!
          end

          private
          def build_url
            return nil unless image
            return image if image.start_with?('/') || @image.start_with?('http')
            @parent.router.url(render: image, context: {})
          end

        end
      end
    end
  end
end
