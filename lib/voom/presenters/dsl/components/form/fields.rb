require 'inflecto'
require_relative 'fields/text'
require_relative 'fields/hidden'
require_relative 'button'

module Voom
  module Presenters
    module DSL
      module Components
        class Form
          module Fields
            def self.create(type, **attribs)
              field_name = Inflecto.classify(type)
              field_klass = Inflecto.constantize("Voom::Presenters::DSL::Components::Form::Fields::#{field_name}")
              field_klass.new(attribs)
            end
          end
        end
      end
    end
  end
end
