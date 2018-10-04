require_relative '../../helpers/errors'
require_relative 'mixins/common'

module Voom
  module Presenters
    module DSL
      module Components
        class TabBar < Base
          attr_reader :tabs

          def initialize(**attribs_, &block)
            super(type: :tab_bar, **attribs_, &block)
            @tabs = []
            expand!
          end

          def tab(label, **attribs, &block)
            @tabs << Tab.new(parent: self, label: label, **attribs, &block)
          end

          class Tab < EventBase
            include Mixins::Common

            attr_accessor :components, :label, :icon, :stacked, :selected

            def initialize(**attribs_, &block)
              super(type: :tab, **attribs_, &block)
              @label = attribs.delete(:label){nil}
              @icon = attribs.delete(:icon) {nil}
              @stacked = attribs.delete(:stacked) {false}
              @selected = attribs.delete(:selected) {false}
              @components = []
              expand!
            end

            def label(text = nil)
              return @label if locked?
              @label = text
            end

            def icon(icon = nil, **attribs, &block)
              return @icon if locked?
              @icon = Components::Icon.new(parent: self, icon: icon,
                                           **attribs, &block)
            end

          end
        end

      end
    end
  end
end
