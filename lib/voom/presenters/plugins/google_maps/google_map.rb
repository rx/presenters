require 'uri'

module Voom
  module Presenters
    module Plugins
      module GoogleMaps
        class GoogleMap < DSL::Components::EventBase

          attr_reader :url, :google_api_key, :height, :width

          def initialize(**attribs_, &block)
            super(type: :google_map, **attribs_, &block)
            @address = attribs.delete(:address)
            @latitude = attribs.delete(:latitude)
            @longitude = attribs.delete(:longitude)
            @width = attribs.delete(:width) { 640 }
            @height = attribs.delete(:height) { 640 }
            @zoom = attribs.delete(:zoom) { 14 }
            @scale = attribs.delete(:scale) { 1 }
            @google_api_key = attribs.delete(:google_api_key) { ENV['GOOGLE_API_KEY'] }
            @url = build_static_map_image_url
            expand!
          end

          private

          def build_static_map_image_url
            return @img_url if locked?
            @img_url = "https://maps.googleapis.com/maps/api/staticmap?center=#{query_string}&zoom=#{@zoom}&scale=#{@scale}&size=#{@width}x#{@height}&markers=|#{query_string}&key=#{@google_api_key}"
          end

          def query_string
            return "#{@latitude},#{@longitude}" if @latitude && @longitude
            URI.escape(@address)
          end

        end
      end
    end
  end
end
