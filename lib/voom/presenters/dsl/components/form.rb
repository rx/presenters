require_relative 'hidden_field'
require_relative 'text_field'
require_relative 'text_area'
require_relative 'mixin_link'
require_relative 'mixin_modifies'

module Voom
  module Presenters
    module DSL
      module Components
        class Form < Base
          include MixinLink
          include MixinModifies

          attr_reader :fields, :actions

          def initialize(**attribs_, &block)
            super(type: :form, **attribs_, &block)
            @fields = []
            @actions = []
            # build_default_fields(**attribs)
            expand!
          end

          # def build_default_fields(**attribs)
          #   cmd = command(attribs)
          #   return unless cmd
          #   trace {cmd.fields.inspect}
          #   hints = cmd.hints
          #   cmd.fields.each do |f|
          #     field(f.name,
          #           label: f.label,
          #           hint: join(hints[f.name],**attribs),
          #           required: f.required,
          #           pattern: f.pattern,
          #           **attribs)
          #   end
          # end

          def text_field(**attribs, &block)
            fields << Components::TextField.new(parent: self,
                                                context: context,
                                                **attribs, &block)
          end

          def text_area(**attribs, &block)
            fields << Components::TextArea.new(parent: self,
                                               context: context,
                                               **attribs, &block)
          end

          def hidden_field(**attribs, &block)
            fields << Components::HiddenField.new(parent: self,
                                                  context: context,
                                                  **attribs, &block)
          end

          def button(text=nil, **attribs, &block)
            @actions << Components::Button.new(parent: self,
                                               context: context,
                                               **attribs, &block)
          end
        end
      end
    end
  end
end
