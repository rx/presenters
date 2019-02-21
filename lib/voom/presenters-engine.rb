require 'filewatcher'
if Rails.version =~ /^4/
  ActiveSupport::Dependencies.require_dependency 'voom/presenters'
else
  require 'voom/presenters'
end

unless defined?(Voom::Presenter::Railtie)
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
        }

        WATCH = -> {
          filewatcher = Filewatcher.new(Rails.root.join('app', '**', '*.pom'))
          Thread.new(filewatcher) do |fw|
            fw.watch do |f|
              puts "Updated file: #{f}"
              BOOT.call
            end
          end
        }

        config.after_initialize do
          BOOT.call
          require_dependency Voom::Presenter::Engine.root.join('lib', 'voom-presenters').to_s
          WATCH.call # if DEV
        end
      end
    end
  end
end
