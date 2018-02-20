require 'inflecto'

module Voom
  # Helper module for converting symbol naming to string.
  # It provides common conversions for variable naming (snake_case) and class naming (class_name)
  module Symbol
    # Maps symbols to strings
    def sym_to_str(name)
      return name if name.is_a? ::String
      name.to_s
    end

    # Converts a namespaced string or symbol to snake_case
    def snake_case(str)
      Inflecto.underscore(sym_to_str(str).tr('.', '_'))
    end

    # Converts a namespaced symbol or string to a proper class name with modules
    def class_name(classname)
      classname = sym_to_str(classname)
      classname.split('.').map { |m| Inflecto.camelize(m) }.join('::')
    end
  end
end
