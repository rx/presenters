module Coprl
  module Presenters
    module Helpers
      module Inflector
        def inflector
          @_inflector_ ||= Dry::Inflector.new
        end

        def humanize(text)
          inflector.humanize(text)
        end
        alias titleize humanize
      end
    end
  end
end
