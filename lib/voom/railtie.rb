require 'filewatcher'

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
      BOOT = -> {
        Voom::Presenters::App.reset!
        Voom::Presenters::Settings.configure do |config|
          config.presenters.root = Rails.root.join('app')
          config.presenters.deep_freeze = false
        end
        Voom::Presenters::App.boot!
      } unless defined?(BOOT)

      WATCH = -> {
        return unless Rails.env.development?
        path = Rails.root.join('app', '**', '*.pom')
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
