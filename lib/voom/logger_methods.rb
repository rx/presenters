require 'logger'

module Voom
  module LoggerMethods
    private
    
    def logger
      init_logger
    end

    def init_logger(klass=nil)
      @logger ||= Logger.new(STDOUT)
    end
  end
end