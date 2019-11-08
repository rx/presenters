# A class used to debug/test components
class StubParent
  attr_accessor :locked

  def locked?
    self.locked
  end

  def _plugins_
    []
  end

  def _helpers_
    nil
  end

  def type
    :root
  end

  def parent(_)
    nil
  end

  def router
    @router ||= Voom::Presenters::Router.new
  end

  def namespace
    []
  end
end
