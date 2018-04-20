require 'yaml'

module Patterns
  module Search
    module Helpers
      def search(term)
        return [] unless term
        @terms ||= YAML::load_file(File.join(__dir__, './search-terms.yml'))
        @terms.keys.reduce([]) do |matches, topic|
          @terms[topic].reduce(matches) do |matches, item|
            matches << item if item.include?(term)
            matches
          end
        end
      end
    end
  end
end