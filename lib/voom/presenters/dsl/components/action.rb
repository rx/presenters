require_relative 'base'

module Voom
  module Presenters
    module DSL
      module Components
        class Action < Base
          # Options are used by the actions
          # Params are passed by the user
          attr_reader :params, :options

          def initialize(type:, **attribs_, &block)
            super(type: type, **attribs_, &block)
            @options = {}
            extract_options!
            @params = attribs.delete(:params) {{}}
            @url = nil
          end

          def url
            @parent.router.url(render: options[:presenter], command: options[:path], context: params)
          end

          private
          def extract_options!
            %i(path presenter target).each do |option|
              optionValue = attribs.delete(option)
              @options.merge!({option => optionValue}) if optionValue
            end
          end
        end
      end
    end
  end
end
