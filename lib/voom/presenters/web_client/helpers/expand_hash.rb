require 'hash_ext/traverse'

# Expands a hash ensuring all values are hash's
# POM object models expand to a hash using :to_h
# JSON is serialized in as recursive OpenStruct's, they need special expansion logic.
module ExpandHash
  def expand_hash(h)
    return h unless h.respond_to?(:to_h)
    HashExt.traverse(h.to_h) do |k, v|
      if v.is_a?(NilClass)
        #   leave it alone
      elsif !v.is_a?(Array) && v.respond_to?(:to_h)
        v = v.is_a?(OpenStruct) ? expand_hash(v.to_h) : v.to_h
      elsif v.is_a?(Array)
        v = v.map { |v| v.is_a?(OpenStruct) ? expand_hash(v.to_h) : v }
      elsif v.respond_to?(:to_h)
        v = v.to_h
      elsif v.respond_to?(:to_hash)
        v = v.to_hash
      end
      [k, v]
    end
  end
end
