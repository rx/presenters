class RenderWithoutWrap < Redcarpet::Render::HTML
    def postprocess(full_document)
      full_document.
          gsub(/{c:([#\w]\w+)}([^{]+){\/c}/) {|m| "<span style=\"color:#{$1};\">#{$2}</span>" }.
          gsub(/<p>(.*)<\/p>/){|m| $1 }
    end
  end