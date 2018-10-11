module Voom
  module Presenters
    if defined?(Rails)
      require 'voom/presenters-engine'
    else
      require 'voom/presenters'
    end
  end
end
