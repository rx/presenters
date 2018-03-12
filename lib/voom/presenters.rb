require 'dry-container'
require 'voom/container_methods'
require 'voom/logger_methods'
require 'voom/trace'
require_relative 'presenters/version'
require_relative 'presenters/container_item'
require_relative 'presenters/dsl/definer'
require_relative 'presenters/dsl/definition'
require_relative 'presenters/settings'
require_relative 'presenters/dsl'
require_relative 'presenters/helpers'

module Voom
  module Presenters
    class << self
      include ContainerMethods
      include LoggerMethods
      include Trace

      def boot!
        logger.warn(no_roots_message) if presenter_paths.empty?
        presenter_paths.each do |load_path|
          logger.debug("Loading presenters from #{load_path}")
          Voom::Presenters.load('.', load_path) unless ENV['VOOM_ENV']=='testing'
        end
      end

      def no_roots_message
            <<~MESSAGE
          No root defined to load presenters!
          Add the following to your initializer/boot process:

            Voom::Presenters.configure do |config|
              config.presenters.root = Rails.root.join('app')
            end
        MESSAGE
      end

      def register(name:, presenter: nil, &block)
        raise Errors::MissingArgument,
              'A presenter class, proc, lambda or a block must be provided!' unless block_given? || presenter
        container.register(sym_to_str(name), config.container_item.new(ui: block || presenter), {})
      end

      def load(dir='app', root=ENV['VOOM_ROOT']||File.expand_path("../../../", __FILE__))
        path = File.expand_path(dir, root)
        trace {"Loading Presenters from: #{path}"}
        DSL.load(File.expand_path(dir, root))
        DSL.finalize
      end

      def reset!
        super
        DSL.reset!
        logger.warn {"Presenters.reset! called. This is a testing only interface."} unless ENV['VOOM_ENV']=='testing'
      end

      private

      def presenter_paths
        Array(Voom::Presenters.config.presenters.root)
      end
    end
  end
end

