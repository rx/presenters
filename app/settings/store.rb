require 'concurrent/map'
require "yaml/store"

module Store
  @@store = Concurrent::Map.new
  def store
    @@store
  end

  def save!
  end

  def load(filename='settings.yml')
    YAML::Store.new(filename)
  end
end