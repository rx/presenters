module Voom::Presenters::WebClient::Helpers
  module Color
    def color_classname(comp, affects = nil, color_attr = :color)
      color = comp&.public_send(color_attr)
      return unless color

      return "v-#{comp.type}__primary" if eq(color, :primary)
      return "v-#{comp.type}__secondary" if eq(color, :secondary)

      "v-#{affects}color__#{color}"
    end

    def color_style(comp, affects = nil, color_attr = :color)
      color = comp.public_send(color_attr)
      "#{affects}color: #{color};" unless %w(primary secondary).include?(color.to_s) || color.nil?
    end
  end
end
