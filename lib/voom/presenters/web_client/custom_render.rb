require 'redcarpet'

module Voom::Presenters::WebClient
  class CustomRender < Redcarpet::Render::Safe
    # include Redcarpet::Render::SmartyPants
    BR = '<br/>'

    def initialize(extensions = {})
      super(extensions)
    end

    def paragraph(text)
      text + BR
    end

    def postprocess(full_document)
      strip_trailing_br(colorize(full_document))
    end

    private

    def colorize(doc)
      doc.gsub(/{c:([#\w]\w+)}([^{]+){\/c}/) {|m| "<span style=\"color:#{$1};\">#{$2}</span>"}
    end

    def strip_trailing_br(doc)
      return doc unless doc.reverse[0...BR.length]==BR.reverse
      doc[0...doc.length-BR.length]
    end
  end
end
