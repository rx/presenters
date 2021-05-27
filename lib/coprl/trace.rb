module Coprl
  module Trace
    include Coprl::LoggerMethods

    private
    # Use a regex on your classes to enable debug logging
    # For example:
    # In your .env
    # export VOOM_TRACE_LOG_REGEX="^.*$"
    # In your code
    # trace {"What is it doing?" }
    def trace(&block)
      return unless ENV['VOOM_TRACE_LOG_REGEX']
      logger.info {"T:#{self.class}:#{block.call}"} if /#{ENV['VOOM_TRACE_LOG_REGEX']}/.match(self.class.name)
    end
  end
end
