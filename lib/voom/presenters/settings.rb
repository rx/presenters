module Voom
  module Presenters
    class Settings
      extend Dry::Configurable
      setting :presenters do
        setting :root, []
      end
    end
  end
end
