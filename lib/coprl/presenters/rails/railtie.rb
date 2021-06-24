module Coprl
  module Presenters
    module Rails
      class Railtie < ::Rails::Railtie
        BOOT = -> {
          Coprl::Presenters::App.reset!
          Coprl::Presenters::Settings.configure do |config|
            config.presenters.root = ::Rails.root.join('app')
            config.presenters.deep_freeze = false
          end
          Coprl::Presenters::App.boot!
        } unless defined?(BOOT)

        WATCH = -> {
          paths = ::Rails.root.join('app', '**', '*.pom')
          file_watcher = ActiveSupport::FileUpdateChecker.new(Dir[paths]) do
            BOOT.call
          end

          ::Rails.application.reloaders << Reloader.new(file_watcher)

        } unless defined?(WATCH)

        config.after_initialize do
          BOOT.call
          WATCH.call
        end
      end
    end
  end
end
