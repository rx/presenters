module Voom
  # Helper module for converting symbol naming to string naming and other forms.
  # 'a.b' and :a__b are the same and should be interchangeable. This module maps the symbol form to the string form.
  # It provides common conversions for variable naming (snake_case) and class naming (class_name)
  module Symbol
    # Maps symbols with double underscores '__' to dot '.'
    def sym_to_str(name)
      return name if name.is_a? ::String
      name.to_s.gsub('__', '.')
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
