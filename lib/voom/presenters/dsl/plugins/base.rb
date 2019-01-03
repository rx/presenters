module Voom
  module Presenters
    module DSL
      module Plugins
        # Loads a plugin for use with the model class, passing optional arguments
        # to the plugin.  If the plugin is a module, load it directly.  Otherwise,
        # require the plugin from sequel/plugins/#{plugin} and then attempt to load
        # the module using a the camelized plugin name under Sequel::Plugins.
        def plugin(plugin, *args, &block)
          m = plugin.is_a?(Module) ? plugin : plugin_module(plugin)
          unless @plugins.include?(m)
            @plugins << m
            m.apply(self, *args, &block) if m.respond_to?(:apply)
            extend(m::ClassMethods) if m.const_defined?(:ClassMethods, false)
            include(m::InstanceMethods) if m.const_defined?(:InstanceMethods, false)
            if m.const_defined?(:DatasetMethods, false)
              dataset_extend(m::DatasetMethods, :create_class_methods => false)
            end
          end
          m.configure(self, *args, &block) if m.respond_to?(:configure)
        end
      end
    end
  end
end
