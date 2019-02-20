require 'voom/presenters/dsl/components/input'
require 'voom/presenters/dsl/components/mixins/append'
require 'voom/presenters/dsl/components/mixins/grids'

module Voom
  module Presenters
    module DSL
      module Components
        class FileInput < Input
          include Mixins::Append
          include Mixins::Grids

          attr_reader :button_label, :input_label, :accept, :preview

          def initialize(**attribs_, &block)
            super(type: :file_input, **attribs_, &block)

            @button_label = attribs.delete(:button_label) { 'Choose a file' }
            @input_label = attribs.delete(:input_label) { 'No file selected' }
            @accept =  attribs.delete(:accept) { nil }
            @preview = attribs.delete(:preview) { nil }
            @components = []
            expand!
          end
        end
      end
    end
  end
end
