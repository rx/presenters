require 'voom/presenters/dsl/components/input'

module Voom
  module Presenters
    module DSL
      module Components
        class TextField < Input

          attr_reader :required, :full_width, :password, :disabled, :auto_complete

          def initialize(**attribs_, &block)
            super(type: :text_field, **attribs_, &block)
            @required = attribs.delete(:required){ false }
            @full_width = attribs.delete(:full_width){ true }
            @password = attribs.delete(:password){ false }
            @disabled = attribs.delete(:disabled){ false }
            @auto_complete = validate_auto_complete(attribs.delete(:auto_complete) { :off })
            label(attribs.delete(:label))if attribs.key?(:label)
            value(attribs.delete(:value))if attribs.key?(:value)
            expand!
          end

          def label(text=nil)
            return @label if locked?
            @label = text
          end

          def icon(icon=nil, **attribs, &block)
            return @icon if locked?
            @icon = Components::Icon.new(parent: self, icon: icon, position: attribs.delete(:position){:right},
                                         **attribs, &block)
          end

          def value(value=nil)
            return @value if locked?
            @value = value
          end

          def pattern(pattern=nil)
            return @pattern if locked?
            @pattern = json_regexp(Regexp.new(pattern))
          end

          def hint(hint=nil)
            return @hint if locked?
            @hint = hint
          end

          def error(error=nil)
            return @error if locked?
            @error = error
          end

          private
          def json_regexp(regexp)
            str = regexp.inspect.
                sub('\\A', '^').
                sub('\\Z', '$').
                sub('\\z', '$').
                sub(/^\//, '').
                sub(/\/[a-z]*$/, '').
                gsub(/\(\?#.+\)/, '').
                gsub(/\(\?-\w+:/, '(').
                gsub(/\s/, '')
            Regexp.new(str).source
          end

          def validate_auto_complete(value)
            case value
            when false, :disabled, 'disabled', 'off', nil
              :off
            when true, :enabled, 'enabled', 'on'
              :on
            else # :on, :off, client-specific values
              value
            end
          end
        end
      end
    end
  end
end

