module Support
  module Host
    HOSTS = %w[127.0.0.1 localhost].freeze
    PORTS = %w[9292 9393].freeze
    ADDRESSES = HOSTS.product(PORTS).map { |a| a.join(':') }.freeze

    def host
      ENV.fetch('INTEGRATION_HOST') do
        host = ADDRESSES.find { |a| check_for_server(a) }
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

    def check_for_server(address)
      _, port = address.split(':')
      system("lsof -i :#{port} > /dev/null")
    end

  end
end
