require 'voom/presenters/plugins'
require 'voom/trace'
include Voom::Trace

module Voom
  module Presenters
    module Pluggable
      def include_plugins(*layers, plugins: [],
                          plugin_method: method(:include))
        plugins = plugins + Array(Voom::Presenters::Settings.config.presenters.plugins)
        plugins.uniq.each do |plugin|
          plugin(plugin, *layers, plugin_method: plugin_method)
        end
      end


      # Returns the module for the specified plugin. If the module is not
      # defined, the corresponding plugin required.
      def plugin_module(plugin)
        module_name = plugin.to_s.gsub(/(^|_)(.)/) {|x| x[-1..-1].upcase}
        unless Voom::Presenters::Plugins.const_defined?(module_name, false)
          trace {"Method plugin loading plugin: #{plugin}"}
          load "voom/presenters/plugins/#{plugin}.rb"
        end
        Voom::Presenters::Plugins.const_get(module_name)
      end

      def plugin(plugin, *layers, plugin_method: method(:include))
        m = plugin.is_a?(Module) ? plugin : plugin_module(plugin)
        layers.each do |layer|
          if m.const_defined?(layer, false) && !self.const_defined?(layer, false)
            trace {"Injecting plugin(#{m.const_get(layer).inspect}) into #{self.inspect}!"}
            plugin_method.call(m.const_get(layer))
          end
        end
      end
    end
  end
end
