require 'voom/presenters/dsl/components/mixins/color'
# used used by components that have color
module ColorHelpers
  include Voom::Presenters::DSL::Components::Mixins::Color

  def color_classname(comp, affects = nil)
    color_method = affects ? :background_color : :color
    color  = comp.send(color_method)
    return if color.nil?
    "v-#{affects ? "#{affects}-" : nil}color__#{comp.send(color_method)}" if color_class?(comp.send(color_method))
  end

  def color_style(comp, affects = nil)
    color_method = affects ? :background_color : :color
    color  = comp.send(color_method)
    return if color.nil?
    case color&.to_sym
    when method(:color_keyword?), method(:color_hex?)
      "#{affects ? "#{affects}-" :nil}color: #{color};"
    else
      nil
    end
  end
end
