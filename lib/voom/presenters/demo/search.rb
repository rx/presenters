require 'sinatra/base'

module Voom
  module Presenters
    module Demo
      class Search < Sinatra::Base
        get('/_search_') do
          content_type :json
          JSON.dump(search(params[:search]))
        end
        
        def search(term)
          require 'yaml'
          return [] unless term
          @terms ||= YAML::load_file(File.join(__dir__, './search-terms.yml'))
          @terms.keys.reduce([]) do |matches, topic|
            @terms[topic].reduce(matches) do |matches, item|
              matches << [item, matches.length] if item.downcase.include?(term.downcase)
              matches
            end
          end
        end

        # start the server if ruby file executed directly
        run! if app_file == $0
      end
    end
  end
end
