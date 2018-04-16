require 'logger'

module Voom
  module LoggerMethods
    private
    
    def logger
      Logger.new(STDOUT)
    end
  end
end