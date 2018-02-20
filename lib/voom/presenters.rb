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

      def register(name:, presenter: nil, &block)
        raise Errors::MissingArgument,
              'A presenter class, proc, lambda or a block must be provided!' unless block_given? || presenter
        container.register(sym_to_str(name), config.container_item.new(ui: block || presenter), {})
      end

      def load(dir='app', root=ENV['VOOM_ROOT']||File.expand_path("../../../", __FILE__))
        path = File.expand_path(dir, root)
        trace{"Loading Presenters from: #{path}"}
        DSL.load(File.expand_path(dir, root))
        DSL.finalize
      end

      def reset!
        super
        DSL.reset!
        logger.warn {"Presenters.reset! called. This is a testing only interface."} unless ENV['VOOM_ENV']=='testing'
        trace { ENV.inspect }
      end
    end
  end
end

Voom::Presenters.load('app', File.expand_path("../../../", __FILE__)) unless ENV['VOOM_ENV']=='testing'
