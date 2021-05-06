module Voom::Presenters::WebClient::Helpers
  module Inflector
    def inflector
      @inflector ||= Dry::Inflector.new
    end
  end
end
