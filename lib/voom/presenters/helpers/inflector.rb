module Voom
  module Presenters
    module Helpers
      module Inflector
        def inflector
          @inflector ||= Dry::Inflector.new
        end
      end
    end
  end
end
