require_relative 'parameters'
require_relative 'trace'

module Voom
  # Simple serializer that will build add a to_hash method to an object by inspecting
  # the intersection of its instance variables and public accessor methods.
  module Serializer
    include Trace
    def to_hash(serializer=true)
      trace {self.class.to_s}
      return build_hash unless serializer
      begin
        serializer_name = "#{self.class.to_s}Serializer"
        serializer = Module.const_get(serializer_name)
        serializer.new(self).to_hash
      rescue NameError
        build_hash
      end
    end

    private
    def build_hash
      accessable = instance_variables.map {|i| i.to_s.gsub('@', '').to_sym} & methods
      accessable.reduce({}) do |hash, v|
        trace {"#{v}:#{params.inspect}"}
        params = Parameters.new(method(v).parameters)
        unless params.required_args? || params.required_options?
          value = self.send(v)
          value = value.map {|v| v.respond_to?(:to_hash) ? v.to_hash : v} if value.respond_to?(:map)
          hash[v]= value.respond_to?(:to_hash) ? value.to_hash : value
        end
        hash
      end
    end
  end
end