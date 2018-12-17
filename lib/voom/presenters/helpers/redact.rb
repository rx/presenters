module Voom
  module Presenters
    module Helpers
      module Redact
        # https://material.io/guidelines/patterns/data-formats.html#data-formats-data-redaction-truncation
        def redact(string, last_chars = 4)
          return "" unless string
          "• • • #{string.split(//).last(last_chars).join}"
        end
      end
    end
  end
end
