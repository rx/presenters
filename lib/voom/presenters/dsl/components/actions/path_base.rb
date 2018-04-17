require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class PathBase < Actions::Base
            attr_reader :path

            def initialize(type:, **attribs_, &block)
              super(type: type, **attribs_, &block)
              @url = nil
              @path = attribs.delete(:path)
            end
          end
        end
      end
    end
  end
end
