# used used by the grid, content and card erbs
module Coprl::Presenters::WebClient::Helpers
  module PaddingHelpers
    def _padding_array_(padding, nesting=0)
      return (%i(top0 right0 bottom0 left0) - padding.map {|p| "#{p.to_s.gsub(%r(\d),'')}0".to_sym} + padding.map(&:to_sym)).sort if padding
      nesting > 1 ? %i(top3 right0 bottom3 left0).sort : []
    end

    def _padding?(padding, nesting=0)
      _padding_array_(padding, nesting) != %i(top0 right0 bottom0 left0).sort
    end

    def _padding_classes_(padding, nesting=0)
      "v-padding-#{_padding_array_(padding, nesting).join('-')}"
    end

    def _alignment_class_(align)
      "v-grid-column-align-#{align}"
    end
  end
end
