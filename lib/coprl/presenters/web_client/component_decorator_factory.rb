require "dry/inflector"

module Coprl
  module Presenters
    module WebClient
      class ComponentDecoratorFactory

        def self.build(component)
          comp_class = "#{inflector.camelize(component.type)}HtmlDecorator"
          klass = if const_defined?(comp_class)
                    const_get(comp_class)
                  else
                    ComponentHtmlDecorator
                  end
          klass.new(component)
        end

        private

        def self.inflector
          @inflector ||= Dry::Inflector.new
        end

      end
    end
  end
end
