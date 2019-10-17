require 'voom/parameters'
require 'voom/trace'

module Voom
  # Simple serializer that will build add a to_h method to an object by inspecting
  # the intersection of its instance variables and public accessor methods.
  module Serializer
    include Trace

    def to_h(serializer=true)
      trace {self.class.to_s}
      return build_hash unless serializer
      begin
        serializer_name = "#{self.class.to_s}Serializer"
        serializer = Module.const_get(serializer_name)
        serializer.new(self).to_h
      rescue NameError
        build_hash
      end
    end

    private
    def build_hash
      accessable = instance_variables.map {|i| i.to_s.gsub('@', '').to_sym} & methods
      accessable.reduce({}) do |hash, v|
        params = Parameters.new(method(v).parameters)
        unless params.required_args? || params.required_options?
          value = self.send(v)
          value = if value.kind_of?(Array)
                    value.map {|v_| v_.respond_to?(:to_hash) ? v_.to_hash : v_}
                  elsif value.kind_of?(Hash)
                    value.map {|k, v_| v_.respond_to?(:to_hash) ? [k, v_.to_hash] : [k, v_]}.to_h
                  else
                    value.respond_to?(:to_hash) ? value.to_hash : value
                  end
          hash[v]= value
        end
        hash
      end
    end
  end
end
