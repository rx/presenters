module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module Snackbars
            def snackbar(text=nil, **attribs, &block)
              self << Components::Snackbar.new(parent: self,
                                               text: text,
                                               **attribs, &block)
            end
          end
        end
      end
    end
  end
end
