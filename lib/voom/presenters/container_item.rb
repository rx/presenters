module Voom
  module Presenters
    # Presenters are registered in the container with this class
    # You can replace this using the presenter container_item setting
    class ContainerItem
      def initialize(ui:)
        @ui = ui
      end

      # Resolves the ui to an instance that can be rendered
      def call
        @ui
      end
    end
  end
end
