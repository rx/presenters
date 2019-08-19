require_relative 'app'

module Voom
  module Presenters
    module WebClient
      class FormEngine < App
        post '/__post__/:presenter' do
          @pom = JSON.parse(request.body.read, object_class: OpenStruct)
          @grid_nesting = Integer(params[:grid_nesting] || 0)
          layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
          erb :web, layout: layout
        end

        get '/__post__/:presenter' do
          begin
            @pom = JSON.parse(params.fetch(:pom), object_class: OpenStruct)
            @grid_nesting = Integer(params[:grid_nesting] || 0)
            layout = !(request.env['HTTP_X_NO_LAYOUT'] == 'true')
            erb :web, layout: layout
          rescue StandardError => e
            "<pre>#{e.message}
             #{e.backtrace.join("\n")}</pre>"
          end
        end
      end
    end
  end
end
