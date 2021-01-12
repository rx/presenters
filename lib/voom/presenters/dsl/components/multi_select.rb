module Voom
  module Presenters
    module DSL
      module Components
        class MultiSelect < Select

          def initialize(**attribs_, &block)
            super(type: :multi_select, **attribs_, &block)
            @required = attribs.delete(:required)
            @full_width = attribs.delete(:full_width){ true }
            @outlined = attribs.delete(:outlined){ true }
            @options = []
            expand!
          end

          def option(text=nil, **attribs, &block)
            @options << CheckOption.new(parent: self,
                                   text: text,
                                   name: @name,
                                   tag:@tag,
                                   **attribs, &block)
          end

          class CheckOption < EventBase
            CHECKBOX_ATTRIBUTES = %i[name value checked dirtyable value off_value].freeze

            attr_reader :selected, :disabled

            def initialize(**attribs_, &block)
              super(type: :multi_select_option, **attribs_, &block)
              @value =     attribs.delete(:value)
              @text =      attribs.delete(:text)
              @selected =  attribs.delete(:selected){ true }
              @disabled =  attribs.delete(:disabled)
              self.checkbox(name: "#{attribs[:name]}[]",
                            value: @value,
                            text: @text,
                            tag: attribs.delete(:tag){ nil },
                            checked: @selected,
                            disabled: @disabled)
              expand!
            end

            def checkbox(**attributes, &block)
              return @checkbox if locked?
              field_name = "#{attributes[:name].to_s}[]"
              @checkbox = Components::Checkbox.new(parent: self,
                                                   name: field_name,
                                                   **attributes,
                                                   &block)
            end

            def _selected?
              @selected
            end
          end

        end
      end
    end
  end
end
