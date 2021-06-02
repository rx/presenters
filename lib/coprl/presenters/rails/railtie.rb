require 'filewatcher'

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
          return unless ::Rails.env.development?
          path = ::Rails.root.join('app', '**', '*.pom')
          puts "Watching #{path} for changes..."
          filewatcher = Filewatcher.new(path)
          Thread.new(filewatcher) do |fw|
            fw.watch do |f|
              puts "Detected updated POM file: #{f}"
              begin
                BOOT.call
              rescue Exception => exc
                puts exc.backtrace
                puts exc.message
              end
            end
          end
        } unless defined?(WATCH)

        config.after_initialize do
          BOOT.call
          WATCH.call
        end
      end
    end
  end
end
