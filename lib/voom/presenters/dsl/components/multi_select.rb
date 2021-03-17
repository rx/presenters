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

          def check_option(**attribs, &block)
            @options << CheckOption.new(parent: self,
                                    name: @name,
                                    tag: @tag,
                                    **attribs.delete_if{ |k,v| [:tag, :name].include?(k) }, &block)
          end

          class CheckOption < EventBase

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
                            tag: tag,
                            checked: @selected,
                            disabled: @disabled,
                            &block)
              expand!
            end

            def checkbox(**attributes, &block)
              return @checkbox if locked?
              @checkbox = Components::Checkbox.new(parent: self,
                                                   **attributes,
                                                   &block)
            end

          end

        end
      end
    end
  end
end
