require 'sinatra/base'

module Coprl
  module Presenters
    module Demo
      class DragonDrop < Sinatra::Base
        include Coprl::Presenters::WebClient::Helpers::ExpandHash

        configure do
          enable :sessions
          set :session_secret, '0e53ba1da13aa8eb8cf3d361e67b70d79265edca'
        end

        post('/_dragon_drop_change_order_') do
          content_type :json
          source_id = JSON.parse(params[:source_id]) if params[:source_id]
          target_id = JSON.parse(params[:target_id]) if params[:target_id]
          dragons = fetch_dragons
          unless source_id == target_id
            source = dragons.select {|d| d.id == source_id}.first
            target = dragons.select {|d| d.id == target_id}.first

            if source && target
              starting_sort = target.sort
              source.sort = starting_sort
              dragons.each do |dragon|
                next if dragon.id == source.id || dragon.sort < starting_sort
                dragon.sort += 1
              end
            end
            save(dragons)
          end
        end

        def fetch_dragons
          JSON.parse(session[:dragons], object_class: OpenStruct)
        end

        def save(dragons)
          session[:dragons] = dragons.map {|d| expand_hash(d)}.to_json
        end

        # start the server if ruby file executed directly
        run! if app_file == $0
      end
    end
  end
end
