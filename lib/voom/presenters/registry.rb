require 'voom/trace'

module Voom
  module Presenters
    class Registry
      class << self
        include Voom::Trace
      end

      @registry = {}

      def self.registry
        @registry
      end

      def self.define(name, namespace, &block)
        namespace = Array(namespace).map(&:to_s)
        fq_name = namespace.any? ? namespace.join(':') + ':' + name.to_s : name.to_s
        registry[fq_name] = Voom::Presenters::DSL::Definition.new(namespace, &block)
      end

      def self.load(directory)
        files = File.join(directory, '**', '*.pom')
        Dir.glob(files) do |file|
          Kernel.load file
        end
      end

      def self.finalize
        registry.each do |key, definition|
          begin
            register(key, build(definition))
          rescue Exception => e
            logger.error {"Failed to load presenter #{key}: #{e.inspect}."}
            raise e
          end
        end
      end

      # This method empties out the dsl definitions
      # It should ONLY be used for testing purposes
      def self.reset!
        registry.clear
      end

      private

      def self.register(name, definition)
        return Voom::Presenters::App.register(name: name, presenter: definition) unless Voom::Presenters::App.registered?(name)
        logger.warn {"Warning attempted to redefine the presenter: #{name}!"}
      end

      def self.build(definition)
        definition.build
      end
    end

    def self.define(name, namespace: nil, &block)
      unless namespace
        namespace = name.to_s.split(':')
        name = namespace.pop
      end
      Registry.define(name, namespace, &block)
    end

  end
end
