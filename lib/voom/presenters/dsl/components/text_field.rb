module Voom
  module Presenters
    module DSL
      module Components
        class TextField < Base
          attr_reader :required, :full_width

          def initialize(**attribs_, &block)
            super(type: :text_field, **attribs_, &block)
            @required = attribs.delete(:required)
            @full_width = attribs.delete(:full_width) || false
            expand!
          end

          def label(text=nil)
            return @label if frozen?
            @label = text
          end

          def value(value=nil)
            return @value if frozen?
            @value = value
          end

          def pattern(pattern=nil)
            return @pattern if frozen?
            @pattern = json_regexp(Regexp.new(pattern))
          end

          def hint(hint=nil)
            return @hint if frozen?
            @hint = hint
          end

          def error(error=nil)
            return @error if frozen?
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
        end
      end
    end
  end
end

