include Voom::Trace
trace {"Loading Presenters Settings"}
require_relative 'helpers/route'

module Voom
  module Presenters
    class Settings
      extend Dry::Configurable
      setting :presenters do
        setting :root, []
        # You can add helpers that will automatically be included
        # For example:
        # For example:
        # Voom::Presenters::Settings.configure do |config|
        #   config.presenters.helpers << YourHelperModule # Passing a module
        #   config.presenters.helpers << &->{ def foo; :foo; end } # Passing a block
        # end
        setting :helpers, [Voom::Presenters::Helpers::Route]
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
