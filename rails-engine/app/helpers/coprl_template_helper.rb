module CoprlTemplateHelper
  def with_presenters_wrapper(&block)
    content = capture(&block)
    render 'body/wrapper', content: content
  end
end
