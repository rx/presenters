module Support
  module Host
    HOSTS = ['localhost:9292','127.0.0.1:9393']

    def host
      ENV.fetch('INTEGRATION_HOST') do
        host = HOSTS.select do |host|
          check_for_server(host)
        end.compact.first
        host ? "http://#{host}" : nil
      end
    end

    def startup_instructions
      <<~INSTRUCTIONS
        Integration Server was not started/located.
        To run integration tests run 'shotgun' or 'rackup' in the root director.
        To point to another server set the INTEGRATION_HOST environment variable.
      INSTRUCTIONS
    end

    def check_for_server(host)
      system("ps aux | grep [t]cp://#{host}")
    end

  end
end