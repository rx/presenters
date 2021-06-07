Rails.application.config.to_prepare do
  Coprl::Presenters::Settings.configure do |config|
    config.presenters.web_client.prepare_context.prepend ->(context, session, _env) {
      context.merge(request: Rack::Request.new(_env),
                    session: session)
    }
  end
end
