module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module FileInputs
            def file_input(**attribs, &block)
              self << Components::FileInput.new(parent: self,
                                                **attribs, &block)
            end
          end
        end
      end
    end
  end
end
