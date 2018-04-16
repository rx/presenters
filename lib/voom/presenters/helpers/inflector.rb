module Voom
  module Presenters
    module Helpers
      module Inflector
        def inflector
          @inflector ||= Dry::Inflector.new
        end

        def humanize(text)
          inflector.humanize(text)
        end
        alias titleize humanize
      end
    end
  end
end
