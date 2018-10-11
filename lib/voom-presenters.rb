unless defined?(Rails)
  def require_dependency(path)
    require(path)
  end
end

module Voom
  module Presenters
    if defined?(Rails)
      require_dependency 'voom/presenters-engine'
    else
      require_dependency 'voom/presenters'
    end
  end
end
