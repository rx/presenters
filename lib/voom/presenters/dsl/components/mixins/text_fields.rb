module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module TextFields
            def text_field(**attribs, &block)
              self << Components::TextField.new(parent: self,
                                                  context: context,
                                                  **attribs, &block)
            end

            def text_area(**attribs, &block)
              self << Components::TextArea.new(parent: self,
                                                 context: context,
                                                 **attribs, &block)
            end

            def hidden_field(**attribs, &block)
              self << Components::HiddenField.new(parent: self,
                                                    context: context,
                                                    **attribs, &block)
            end
          end
        end
      end
    end
  end
end
