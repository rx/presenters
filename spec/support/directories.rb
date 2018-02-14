module Support
  module Directories
    def app_dir
      File.expand_path('../../../app', __FILE__)
    end

    def spec_dir
      File.expand_path('../../', __FILE__)
    end
  end
end
