module Coprl
  module Presenters
    module DSL
      module Components
        class TextField < Input

          attr_reader :required,
                      :full_width,
                      :auto_complete,
                      :case_type,
                      :behavior

          VALID_CASE_TYPES = %i[mixed upper lower].freeze

          def initialize(**attribs_, &block)
            super(type: :text_field, **attribs_, &block)
            @required = attribs.delete(:required){ false }
            @full_width = attribs.delete(:full_width){ true }
            @case_type = validate_case_type(attribs.delete(:case_type) { :mixed })
            @auto_complete = validate_auto_complete(attribs.delete(:auto_complete) { :off })
            @behavior = determine_behavior(attribs.delete(:password), attribs.delete(:behavior))
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

          def behavior
            return "type=\"#{@behavior}\"" unless @behavior == 'currency'
            return 'type="number" min="0.00" max="10000000000.00" step="0.01"'
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

          def validate_case_type(case_type)
            return unless case_type
            case_type = case_type.to_sym

            raise Errors::ParameterValidation, "Invalid case type specified: #{case_type}" unless VALID_CASE_TYPES.include?(case_type)
            case_type
          end

          def determine_behavior(password, behavior)
            unless password.nil?
              logger.warn(
                'The `password` attribute of text_field is deprecated. ' \
                'Use `text_field behavior: :password` instead.'
              )
            end

            case password
            when nil
              behavior
            when true
              :password
            when false
              :text
            end
          end
        end
      end
    end
  end
end
