require 'dry-container'

module Voom
  module ContainerMethods
    include Voom::Symbol::ToStr

    def registered_keys
      @registered_keys ||= []
    end

    def registered?(presenter)
      container.key?(sym_to_str(presenter))
    end

    def [](name)
      resolve(name)
    end

    def resolve(name)
      container.resolve(sym_to_str(name))
    end

    def list
      container.keys
    end
    alias keys list

    def container
      @container ||= Dry::Container.new
    end

    # This method empties out the container
    # It should ONLY be used for testing purposes
    def reset!
      registered_keys.each { |key| ClassConstants.new(key).deconstantize }
      @registered_keys = []
      container._container.clear
    end
  end
end
