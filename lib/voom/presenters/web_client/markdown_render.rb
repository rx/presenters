class RenderWithoutWrap < Redcarpet::Render::HTML
    def postprocess(full_document)
      # Take out paragraph tags
      Regexp.new(/\A<p>(.*)<\/p>\Z/m).match(full_document)[1] rescue full_document
    end
  end