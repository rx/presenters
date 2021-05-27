module Coprl
  module Presenters
    module Generators
      module Inflectors
        def classify(input)
          # "books" => "Book"
          @inflector.classify(input)
        end

        def pluralize(input)
          #book" => "books"
          @inflector.pluralize(input)
        end

        def singularize(input)
          #"books" => "book"
          @inflector.singularize(input)
        end

        def camelize(input)
          # "dry/inflector" => "Dry::Inflector"
          @inflector.camelize(input)
        end

        def tableize(input)
          # "Book" => "books"
          @inflector.tableize(input)
        end

        def dasherize(input)
          # "dry_inflector" => "dry-inflector"
          @inflector.dasherize(input)
        end

        def underscore(input)
          # "dry-inflector" => "dry_inflector"
          @inflector.underscore(input)
        end

        def demodulize(input)
          # "Dry::Inflector"  => "Inflector"
          @inflector.demodulize(input)
        end

        def humanize(input)
          # "dry_inflector"  => "Dry inflector", "author_id" => "Author"
          @inflector.humanize(input)
        end

        def ordinalize(input)
          # 1 => "1st
          @inflector.ordinalize(input)
        end

      end
    end
  end
end

