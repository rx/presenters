unless defined?(Rails)
  def require_dependency(path)
    require(path)
  end
end

module Voom
  module Presenters
    if defined?(Rails)
      require 'voom/presenters-engine'
    else
      require 'voom/presenters'
    end
  end
end
