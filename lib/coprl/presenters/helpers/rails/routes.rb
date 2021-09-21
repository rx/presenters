module Coprl
  module Presenters
    module Helpers
      module Rails
        module Routes
          include ::Rails.application.routes.url_helpers
          def default_url_options
            ::Rails.application.config.action_controller.default_url_options || { :host => context[:base_url] ? context[:base_url] : context[:request].host_with_port }
          end
        end
      end
    end
  end
end
