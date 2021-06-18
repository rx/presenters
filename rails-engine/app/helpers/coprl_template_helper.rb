module CoprlTemplateHelper

  def with_presenters_wrapper(&block)
    header = @pom&.header
    drawer = @pom&.drawer
    footer = @pom&.footer

    root_classes = []
    root_classes << 'v-root--header-present' if header
    root_classes << 'v-root--drawer-present' if drawer
    root_classes << 'v-root--footer-present' if footer

    content = capture(&block)

    render 'body/wrapper', body_content: content, header: header, drawer: drawer,
           footer: footer, root_classes: root_classes
  end

end
