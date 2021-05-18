module Voom
  module Presenters
    module Rails
      class Engine < ::Rails::Engine
        config.before_configuration do
          # load our engine from the rails-engine directory
          config.root = File.join(root,'rails-engine')
        end

        initializer 'voom_presenters.middleware' do |app|
          # adds the public directory to the middleware so that the bundle.css and bundle.js are picked up
          # TODO: should rename these since they are common names that are likely going to collide
          app.middleware.use ::ActionDispatch::Static, File.join(root, '..', 'public')
        end
      end
    end
  end
end

