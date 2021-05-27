module Coprl::Presenters::WebClient::Helpers
  module SnakeToCamel
    def snake_to_camel(hash, except: [])
      Hash[hash.map {|k, v|
        next [k, v] if except.include?(k)
        new_key = k.to_s.split('_').collect(&:capitalize).join
        new_key[0] = new_key[0].downcase
        [new_key, v]}
      ]
    end
  end
end
