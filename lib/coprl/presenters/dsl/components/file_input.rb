module Coprl
  module Presenters
    module DSL
      module Components
        class FileInput < Input
          include Mixins::Append
          include Mixins::Buttons
          include Mixins::Grids

          attr_reader :accept, :preview, :components

          def initialize(**attribs_, &block)
            super(type: :file_input, **attribs_, &block)

            @accept =  attribs.delete(:accept) { nil }
            @preview = attribs.delete(:preview) { nil }
            @components = []
            expand!
            default_button
          end

          def value(value=nil)
            return @value if locked?
            @value = value
          end
          private
          def default_button
            button(icon: :cloud_upload) unless components.any?
          end
        end
      end
    end
  end
end
