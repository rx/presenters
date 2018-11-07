require 'voom/presenters/dsl/components/input'

module Voom
  module Presenters
    module DSL
      module Components
        class FileInput < Input
          attr_reader :button_label, :input_label

          def initialize(**attribs_, &block)
            super(type: :file_input, **attribs_, &block)

            @button_label = attribs.delete(:button_label) { 'Choose a file' }
            @input_label = attribs.delete(:input_label) { 'No file selected' }

            expand!
          end
        end
      end
    end
  end
end
