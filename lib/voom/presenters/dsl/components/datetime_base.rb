require_relative 'text_field'

module Voom
  module Presenters
    module DSL
      module Components
        class DatetimeBase < TextField
          attr_reader :config

          def initialize(**attribs_, &block)
            super(**attribs_, &block)
            @config = {}
            map_config(:format, :alt_format, true)
            merge_config(:disable)
            merge_config(:enable)
            merge_config(:mode)

            clear_icon(:clear) do
              event :click do
                snackbar 'Clicked'
              end
            end
          end

          def clear_icon(icon=nil, **attribs, &block)
            return @clear_icon if locked?
            @clear_icon = icon ? Components::Icon.new(parent: self, icon: icon,
                                                      context: context,
                                                      **attribs, &block) : nil
          end

          private
          def merge_config(attrib, default=false)
            attrib_value = attribs.delete(attrib) {default ? default(attrib) : nil}
            @config.merge!({attrib => attrib_value}) if attrib_value
          end

          def map_config(attrib, new_attrib, default=false)
            attrib_value = attribs.delete(attrib) {default ? default(attrib) : nil}
            @config.merge!({new_attrib => attrib_value}) if attrib_value
          end
        end
      end
    end
  end
end

