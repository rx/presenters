require 'voom/parameters'
require 'voom/trace'

module Voom
  # Simple serializer that will build add a to_h method to an object by inspecting
  # the intersection of its instance variables and public accessor methods.
  module Serializer
    include Trace

    def to_h(serializer = true)
      trace { self.class.to_s }
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
      accessable = instance_variables.map { |i| i.to_s.gsub('@', '').to_sym } & methods
      accessable.reduce({}) do |hash, v|
        params = Parameters.new(method(v).parameters)
        unless params.required_args? || params.required_options?
          value = self.send(v)
          value = if value.kind_of?(Array)
                    value.map { |v_| v_.respond_to?(:to_h) ? v_.to_h : v_ }
                  elsif value.kind_of?(Hash)
                    value.map { |k, v_| [k,
                                         case
                                         when v_.nil?
                                           v_
                                         when v_.respond_to?(:to_hash)
                                           v_.to_hash
                                         # Special case for last_response (and future dynamic parameters)
                                         # They can't respond to :to_hash so they get serialized using to_h
                                         when v_.respond_to?(:dynamic_parameter)
                                           v_.to_h
                                         else
                                           v_
                                         end] }.to_h
                  elsif value.nil?
                    value
                  else
                    value.respond_to?(:to_h) ? value.to_h : value
                  end
          hash[v] = value
        end
        hash
      end
    end
  end
end
