require 'sinatra/base'

module Coprl
  module Presenters
    module Demo
      class Slow < Sinatra::Base
        post('/_slow_') do
          sleep(Integer(params.fetch('seconds',5)))
          content_type :json
          JSON.dump(params)
        end

        # start the server if ruby file executed directly
        run! if app_file == $0
      end
    end
  end
end
