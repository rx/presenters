class CustomRender < Redcarpet::Render::Safe
  include Redcarpet::Render::SmartyPants

  def initialize(extensions = {})
    super(extensions)
  end
  
  def paragraph(text)
      text + '<br/>'
    end

  def postprocess(full_document)
    full_document.
        gsub(/{c:([#\w]\w+)}([^{]+){\/c}/) {|m| "<span style=\"color:#{$1};\">#{$2}</span>"} # color
  end
end