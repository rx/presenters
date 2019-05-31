require 'sinatra/base'

module Voom
  module Presenters
    module Demo
      # Echo's back post, delete and put
      # Used to demonstrate how the posts(updates), deletes and modifies actions work.
      class Echo < Sinatra::Base
        post('/_echo_') do
          content_type :json
          params[:echo] = JSON.parse(params[:echo]) if params[:echo]
          status(params[:status]) if params[:status]
          JSON.dump(params)
        end

        post('/_echo_snackbar_') do
          content_type :json
          JSON.dump(messages:{snackbar: [params[:snackbar_echo]]})
        end

        delete('/_echo_') do
          content_type :json
          JSON.dump(params)
        end

        put('/_echo_') do
          content_type :json
          JSON.dump(params)
        end

        # start the server if ruby file executed directly
        run! if app_file == $0
      end
    end
  end
end
