module Coprl
  module Presenters
    class App
      class << self
        include Coprl::ContainerMethods
        include Coprl::LoggerMethods
        include Coprl::Trace
        include Coprl::Symbol

        def boot!
          logger.warn(no_roots_message) if presenter_paths.empty?
          presenter_paths.each do |load_path|
            Coprl::Presenters::App.load('.', load_path) unless ENV['VOOM_ENV']=='testing'
          end
        end

        def no_roots_message
          <<~MESSAGE
            No root defined to load presenters!
            Add the following to your initializer/boot process:

              Coprl::Presenters::Settings.configure do |config|
                config.presenters.root = Rails.root.join('app')
              end
          MESSAGE
        end

        def register(name:, presenter: nil, &block)
          raise Errors::MissingArgument,
                'A presenter class, proc, lambda or a block must be provided!' unless block_given? || presenter
          container.register(sym_to_str(name), Coprl::Presenters::ContainerItem.new(ui: block || presenter), {})
        end

        def load(dir='app', root=ENV['VOOM_ROOT']||File.expand_path("../../../", __FILE__))
          path = File.expand_path(dir, root)
          trace {"Loading Presenters from: #{path}"}
          Presenters::Registry.load(File.expand_path(dir, root))
          Presenters::Registry.finalize
        end

        def reset!
          super
          Presenters::Registry.reset!
        end

        private

        def presenter_paths
          Array(Coprl::Presenters::Settings.config.presenters.root)
        end
      end
    end
  end
end

