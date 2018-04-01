module Voom
  module Presenters
    class Settings
      extend Dry::Configurable
      setting :presenters do
        setting :root, []
        setting     :helpers, []
        setting     :deep_freeze, true

      end
    end
  end
end
