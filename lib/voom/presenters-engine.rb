require 'voom/presenters'

module Voom
  module Presenter
    class Engine < ::Rails::Engine
      config.eager_load_paths += Dir["#{config.root}/lib"]
    end
  end
end


module Voom
  module Presenter
    class Railtie < ::Rails::Railtie
      BOOT = ->{
        Voom::Presenters::Settings.configure do |config|
          config.presenters.root = Rails.root.join('app')
          config.presenters.deep_freeze = false
        end
        Voom::Presenters::App.boot!
      }
      RELOADER = ActiveSupport::FileUpdateChecker.new([], {"app" => ["pom"]}) do
        Voom::Presenters::App.reset!
        BOOT.call
      end

      initializer 'voom-presenters' do |app|
        app.reloaders << RELOADER
      end

      config.to_prepare do
        reloaded  = RELOADER.execute_if_updated
        BOOT.call unless reloaded
        # require_dependency Voom::Presenter::Engine.root.join('lib', 'voom-presenters').to_s
      end
    end
  end
end