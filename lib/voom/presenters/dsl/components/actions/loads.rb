require_relative 'path_base'
module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Loads < PathBase
            attr_reader :presenter
            def initialize(**attribs_, &block)
              super(type: :loads, **attribs_, &block)
              @url = nil
              @presenter = attribs.delete(:presenter)
            end
          end
        end
      end
    end
  end
end