module Voom
  module Presenters
    module Api
      module RenderPresenter
        # defaults are suitable for a generic sinatra app.
        def render_presenter(presenter,
                             context: params,
                             router: Voom::Presenters::Api::Router.new(base_url: request.base_url))
          begin
            _presenter_ = Voom::Presenters::App[presenter].call
            pom = _presenter_.expand(router: router, context: context)
            content_type :json
            JSON.dump(pom.to_hash)
          rescue StandardError => e
            Presenters::Settings.config.presenters.error_logger.call(
                @env['rack.errors'],
                e,
                params,
                _presenter_.name
            )
            raise e
          end
        end
      end
    end
  end
end
