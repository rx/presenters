require_relative 'mixins/modifies'

module Voom
  module Presenters
    module DSL
      module Components
        class Event < Base
          attr_accessor :event, :actions

          def initialize(**attribs_, &block)
            super(type: :event, **attribs_, &block)
            @event = attribs[:event]
            @actions = []
            expand!
          end

          def loads(presenter, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :loads,
                                               target: nil,
                                               presenter: presenter,
                                               params: params, &block)
          end

          def replaces(target, presenter, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :replaces,
                                               target: target,
                                               presenter: presenter,
                                               params: params, &block)
          end

          # Method can be one of :post, :put, :delete or :patch
          def posts(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :post,
                                               path: path,
                                               params: params, &block)
          end

          def updates(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :update,
                                               path: path,
                                               params: params, &block)
          end

          def creates(path, **params, &block)
            posts(path, **params, &block)
          end

          def deletes(path, **params, &block)
            @actions << Components::Action.new(parent: self,
                                               action_type: :delete,
                                               path: path,
                                               params: params, &block)
          end
        end
      end
    end
  end
end
