include Voom::Trace
trace {"Loading Presenters Settings"}

module Voom
  module Presenters
    class Settings
      extend Dry::Configurable
      setting :presenters do
        setting :root, []
        setting :helpers, []
        setting :deep_freeze, true
        setting :id_generator, ->(node) {"id-#{SecureRandom.hex}"}
        setting :web_client do
          # Add lambda's to modify the context for the presenters
          # For example:
          # Voom::Presenters::Settings.configure do |config|
          #   config.presenters.web_client.prepare_context << ->(context, session, _env){
          #     identity_id = session[:aaa_identity]
          #     context.merge(aaa_identity: identity_id)
          #   }
          # end
          setting :prepare_context, []
        end
      end
    end
  end
end
