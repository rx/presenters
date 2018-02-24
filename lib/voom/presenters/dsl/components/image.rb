require_relative 'mixin_link'

module Voom
  module Presenters
    module DSL
      module Components
        class Image < Base
          include MixinLink

          attr_accessor :image, :height, :width, :selected

          def initialize(**attribs_, &block)
            super(type: :image, context: context,
                  **attribs_, &block)
            @image = attribs.delete(:image)
            @height    = attribs.delete(:height)
            @width    = attribs.delete(:width)
            @selected = attribs.delete(:selected)
            expand!
          end
        end
      end
    end
  end
end
