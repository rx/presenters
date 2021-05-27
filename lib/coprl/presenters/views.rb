module Coprl
  module Presenters
    class Views
      def self.view_path
        File.expand_path('../../../../views/mdc', __FILE__)
      end

      def self.web_erb_path
        File.join(view_path, web_erb)
      end

      def self.web_erb
        'web.erb'
      end
    end
  end
end
