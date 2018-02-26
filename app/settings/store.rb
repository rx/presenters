require 'concurrent/map'
require "yaml/store"

module Store
  @@store = Concurrent::Map.new
  def store
    @@store
  end
end