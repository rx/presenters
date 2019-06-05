require 'voom/presenters/dsl/components/typography'

module Voom::Presenters::DSL::Components
  class Link < Typography

    VALID_TARGETS = %i[self blank].freeze

    attr_accessor :url,
                  :text,
                  :target

    def initialize(parent:, **attribs_, &block)
      super(type: :link, parent: parent, **attribs_, &block)

      @url = attribs_.delete(:url)
      @text = attribs_.delete(:text) { url }
      @target = validate_target(attribs_.delete(:target) { :self })

      expand!
    end

    private

    def validate_target(value)
      target = value&.to_sym

      unless VALID_TARGETS.include?(target)
        raise Errors::ParameterValidation,
              "target must be one of #{VALID_TARGETS.join(', ')}"
      end

      target
    end
  end
end
