module Voom
  module Presenters
    module DSL
      module Components
        class Action < Base
          attr_accessor :params

          def initialize(type:, **attribs_, &block)
            super(type: type, **attribs_, &block)
            @params = attribs.delete(:params){{}}.merge(extract_params!(:path, :presenter, :target))
            @url = nil
          end

          def url
            @parent.router.url(render: params[:presenter], command: params[:path], context: params.select{|x| ![:presenter, :path, :target].include?(x)})
          end

          private
          def extract_params!(*keys)
            keys.map do |key|
              value = attribs.delete(key)
              value ? [key, value] : nil
            end.compact.to_h
          end
        end
      end
    end
  end
end
