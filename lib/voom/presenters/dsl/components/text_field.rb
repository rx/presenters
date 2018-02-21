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
            return @label if locked?
            @label = text
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
        end
      end
    end
  end
end

