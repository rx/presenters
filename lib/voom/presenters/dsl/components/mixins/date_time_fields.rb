module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module DateTimeFields
            def datetime_field(**attribs, &block)
              self << Components::DatetimeField.new(parent: self,
                                                    **attribs, &block)
            end

            def date_field(**attribs, &block)
              self << Components::DateField.new(parent: self,
                                                **attribs, &block)
            end

            def time_field(**attribs, &block)
              self << Components::TimeField.new(parent: self,
                                                **attribs, &block)
            end
          end
        end
      end
    end
  end
end
