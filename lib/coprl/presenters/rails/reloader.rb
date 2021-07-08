module Coprl
  module Presenters
    module Rails
      class Reloader
        def initialize(file_watcher)
          @file_watcher = file_watcher
        end

        def updated?
          @file_watcher.execute_if_updated
        end
      end
    end
  end
end
