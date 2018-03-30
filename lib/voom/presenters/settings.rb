module Voom
  module Presenters
    class Settings
      extend Dry::Configurable
      setting :presenters do
        setting :root, []
        setting     :helpers, []
      end
    end
  end
end
