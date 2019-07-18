module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Updates < Actions::Base
            def initialize(**attribs_, &block)
              super(type: :update, **attribs_, &block)
            end

            # Updates posts its parameters as form data, so context should be empty
            # def url
            #   @parent.router.url(render: options[:presenter], command: options[:path], context:{})
            # end
          end
        end
      end
    end
  end
end
