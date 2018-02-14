module Voom
  module Presenters
    extend Dry::Configurable

    setting :dsl do
      # The definer defines the DSL that is read for presenters
      # If you want to extend or change the DSL, do it with a new definer module
      setting :definer, Voom::Presenters::DSL::Definer
      # The presenters definition builds the POM
      # If you want to change how an POM gets defined and registered, do it with a new definition class
      setting :definition, Voom::Presenters::DSL::Definition
    end
    # Container for all the presenters
    setting :container, Dry::Container.new
    setting :container_item, Voom::Presenters::ContainerItem
    setting :dependencies_container, Dry::Container.new
  end
end
