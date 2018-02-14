require_relative 'form/fields'

module Voom
  module Presenters
    module DSL
      module Components
        class Form < Base
          attr_reader :actions

          def initialize(**attribs, &block)
            @fields = {}
            @actions = []
            super(type: :form, **attribs, &block)
            build_default_fields(**attribs)
            expand!
          end

          def build_default_fields(**attribs)
            cmd = command(attribs)
            return unless cmd
            trace {cmd.fields.inspect}
            hints = cmd.hints
            cmd.fields.each do |f|
              field(f.name,
                    label: f.label,
                    hint: join(hints[f.name],**attribs),
                    required: f.required,
                    pattern: f.pattern,
                    **attribs)
            end
          end

          def fields
            @fields
          end

          def field(first_id=nil, id: nil, label: nil, type: :text, **attribs)
            the_id = first_id||id
            value = attribs.dig(:context,the_id)
            _attribs_ = attributes.merge(attribs)
            @fields[the_id] = Form::Fields.create(type, id: the_id, label: label, value: value,
                                           router: @router, context: @context, dependencies: @dependencies,
                                                  helpers: @helpers, **_attribs_)
          end

          def button(text:, type: :button, **attribs)
            @actions << Form::Button.new(text: text,
                                         type: type,
                                         router: @router, context: @context, dependencies: @dependencies,
                                         helpers: @helpers,
                                         **attribs)

          end
        end
      end
    end
  end
end
