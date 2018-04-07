module Voom
  module Presenters
    class Settings
      extend Dry::Configurable
      setting :presenters do
        setting :root, []
        setting     :helpers, []
        setting     :deep_freeze, true
        setting         :web_client do
          # Add lambda's to modify the context for the presenters
          # For example:
          # Voom::Presenters::Settings.configure do |config|
          #   config.presenters.web_client.prepare_context << ->(context, session, _env){
          #     identity_id = session[:aaa_identity]
          #     context.merge(aaa_identity: identity_id)
          #   }
          # end
          setting :prepare_context, [->(context, _session, _env){ context.merge(request_id: SecureRandom.hex(8)) }]
        end
      end
    end
  end
end
