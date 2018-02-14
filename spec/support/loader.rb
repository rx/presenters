module Support
  module Loader
    def load_presenters(dir, root)
      Voom::Presenters.load(dir, root)
    end

    def reset_presenters!
      Voom::Presenters.reset!
    end
  end
end
