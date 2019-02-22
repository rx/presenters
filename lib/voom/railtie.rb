# if defined?(::Rails)
#   require 'filewatcher'
#   p 'rails'
#
#   reset = -> {
#     p 'Reseting'
#     Voom::Presenters::App.reset!
#     Voom::Presenters::App.boot!
#   }
#   boot = -> {
#     p 'Booting'
#     Voom::Presenters::Settings.configure do |config|
#       config.presenters.root = ::Rails.root.join('app')
#       config.presenters.deep_freeze = false
#     end
#     reset.call
#   }
#
#   watch = -> {
#     return unless ::Rails.env.development?
#     p 'Watching'
#     path = ::Rails.root.join('app', '**', '*.pom')
#     puts "Watching #{path} for changes..."
#     filewatcher = Filewatcher.new(path)
#     Thread.new(filewatcher) do |fw|
#       fw.watch do |f|
#         puts "Detected updated POM file: #{f}"
#         reset.call
#       end
#     end
#   }
#
#
#   ::Rails.application.config.after_initialize do
#     boot.call
#     watch.call
#   end
# end
#
#
require 'filewatcher'

p 'railite'
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
            BOOT.call
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
