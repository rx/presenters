require_relative 'input'

module Voom
  module Presenters
    module DSL
      module Components
        class TextField < Input

          attr_reader :required, :full_width, :password

          def initialize(**attribs_, &block)
            super(type: :text_field, **attribs_, &block)
            @required = attribs.delete(:required)
            @full_width = attribs.delete(:full_width){ true }
            @password = attribs.delete(:password)
            expand!
          end

          def label(text=nil)
            return @label if locked?
            @label = text
          end

          def icon(icon=nil, **attribs, &block)
            return @icon if locked?
            @icon = Components::Icon.new(parent: self, icon: icon,
                                         context: context,
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

          def readonly(readonly=nil)
            return @readonly if locked?
            @readonly = readonly
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
        end
      end
    end
  end
end

