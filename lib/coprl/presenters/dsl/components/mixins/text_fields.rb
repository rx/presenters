module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module TextFields
            def text_field(**attribs, &block)
              self << Components::TextField.new(parent: self,
                                                **attribs, &block)
            end

            def text_area(**attribs, &block)
              self << Components::TextArea.new(parent: self,
                                               **attribs, &block)
            end

            def hidden_field(**attribs, &block)
              self << Components::HiddenField.new(parent: self,
                                                  **attribs, &block)
            end

            def rich_text_area(**attribs, &block)
              self << Components::RichTextArea.new(parent: self,
                                                   **attribs, &block)
            end

            def number_field(**attribs, &block)
              self << Components::NumberField.new(parent: self,
                                                   **attribs, &block)
            end
          end
        end
      end
    end
  end
end
