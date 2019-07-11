require 'voom/trace'
include Voom::Trace
trace {"Loading Presenters Settings"}
require 'voom/presenters/helpers/route'
require 'dry-configurable'

unless defined?(Voom::Presenters::Settings)
  module Voom
    module Presenters
      class Settings
        extend ::Dry::Configurable
        setting :presenters do
          setting :root, []
          # You can add helpers that will automatically be included
          # For example:
          # Voom::Presenters::Settings.configure do |config|
          #   config.presenters.helpers << YourHelperModule # Passing a module
          #   config.presenters.helpers << &->{ def foo; :foo; end } # Passing a block
          # end
          setting :helpers, [Voom::Presenters::Helpers::Route]
          setting :deep_freeze, false
          setting :id_generator, ->(node) {"id-#{SecureRandom.hex}"}
          setting :api_client do
            setting :error_logger, ->(file, e, _params, _presenter_name) {
              msg = ["#{Time.now.strftime("%Y-%m-%d %H:%M:%S")} - #{e.class} - #{e.message}:", *e.backtrace].join("\n\t")
              file.puts(msg)
            }
          end
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
            # Relative to the root
            setting :custom_css, '../public/presenters'
            setting :error_logger, ->(file, e, _params, _presenter_name) {
              msg = ["#{Time.now.strftime("%Y-%m-%d %H:%M:%S")} - #{e.class} - #{e.message}:", *e.backtrace].join("\n\t")
              file.puts(msg)
            }
          end
          setting :plugins, [:google_maps]
          setting :components do
            setting :defaults do
              setting :datetime do
                setting :format, 'M j, y h:i K'
                setting :time_24hr, false
              end
              setting :date do
                setting :format, 'F j, Y'
              end
              setting :time do
                setting :format, 'h:i K'
                setting :time_24hr, false
              end
              setting :text_area do
                setting :rows, 3
                setting :cols, 80
              end
              # Typography
              setting :headline do
                setting :level, 5
              end
              setting :title do
                setting :level, 6
              end
              setting :rich_text_area do
                setting :rows, 6
              end
            end
          end
        end

        def self.default(type, key)
          config.presenters.components.defaults&.public_send(type)&.public_send(key)
        end
      end
    end
  end
end
