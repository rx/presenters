require "dry/inflector"
require 'voom/presenters/pluggable'

module WebClient
  module Actions
    # This class renders a given component.
    # First it looks for plugins that override default behavior
    # If they don't exist then it renders the base components
    class Resolver
      extend Voom::Presenters::Pluggable
      include_plugins(:WebClientActions)

      def initialize(comp, action)
        @comp = comp
        @action = action
        initialize_plugins
      end

      def resolve
        return method(:"action_data_#{@action.type}") if respond_to?(:"action_data_#{@action.type}")
        require_relative "#{@action.type}"
        # Deligate the action data to each action class
        # [Type, URL, Options, Params] these are passed into javascript event/action class constructors
        # Only the type need be canonical, the rest is defined between this class and its javascript
        Object.const_get("::WebClient::Actions::#{inflector.camelize(@action.type)}").new
      end

      private

      def initialize_plugins
        self.class.include_plugins(:WebClientActions, plugins: @comp.send(:_plugins_))
      end

      def inflector
        @inflector ||= Dry::Inflector.new
      end
    end
  end
end

