module Coprl::Presenters::WebClient::Helpers
  module TransformHash
    def to_hash(ostruct_or_hash)
      {}.tap do |h|
        ostruct_or_hash.to_h.each {|key, value| h[key.to_sym] = transform(value)}
      end
    end

    def transform(thing)
      case thing
      when OpenStruct
        to_hash(thing)
      when Array
        thing.map {|v| transform(v)}
      else
        thing
      end
    end
  end
end
