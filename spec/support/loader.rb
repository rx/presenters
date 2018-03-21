module Support
  module Loader
    def load_presenters(dir, root)
      Voom::Presenters::App.load(dir, root)
    end

    def reset_presenters!
      Voom::Presenters::App.reset!
    end
  end
end
