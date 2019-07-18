# used used by the grid, content and card erbs
module Voom::Presenters::WebClient::Helpers
  module Padding
    def _padding_array_(padding, nesting)
      return (%i(top0 right0 bottom0 left0) - padding.map {|p| "#{p}0".to_sym} + padding.map(&:to_sym)).sort if padding
      nesting > 1 ? %i(top right0 bottom left0).sort : []
    end

    def _padding_classes_(padding, nesting=0, subclass: :grid)
      "v-#{subclass}__padding-#{_padding_array_(padding, nesting).join('-')}"
    end
  end
end
