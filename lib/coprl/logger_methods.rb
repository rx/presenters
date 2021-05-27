require 'logger'

module Coprl
  module LoggerMethods
    private
    
    def logger
      Logger.new(STDOUT)
    end
  end
end
