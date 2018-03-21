require_dependency 'voom/presenters'

module Voom
  module Presenter
    class Engine < ::Rails::Engine
      config.autoload_paths += Dir["#{config.root}/lib/**/"]
    end
  end
end


module Voom
  module Presenter
    class Railtie < ::Rails::Railtie
      BOOT = -> (state){
        Rails.logger.debug("#{state} Presenters")
        Voom::Presenters::Settings.configure do |config|
          config.presenters.root = Rails.root.join('app')
        end
        Voom::Presenters::App.boot!
      }
      RELOADER = ActiveSupport::FileUpdateChecker.new([], {"app" => ["pom"]}) do
        Voom::Presenters::App.reset!
        BOOT.call('Reloading')
      end

      initializer 'voom-presenters' do |app|
        app.reloaders << RELOADER
      end

      config.to_prepare do
        RELOADER.execute_if_updated
      end

      config.after_initialize do
        BOOT.call('Loading')
      end
    end
  end
end