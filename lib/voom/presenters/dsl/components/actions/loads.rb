require_relative 'base'
require 'voom/presenters/namespace'


module Voom
  module Presenters
    module DSL
      module Components
        module Actions
          class Loads < Actions::Base
            include Namespace

            def initialize(**attribs_, &block)
              super(type: :loads, **attribs_, &block)
            end

            def url
              @parent.router.url(render: parse_presenter, command: options[:path], context: params)
            end

            private

            def parse_presenter
              return options[:presenter] if options[:presenter].match(/^https?\:\/\//)
              _expand_namespace_(options[:presenter], namespace).gsub(':','/')
            end
          end
        end
      end
    end
  end
end
