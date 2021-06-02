module Support
  module Loader
    def load_presenters(dir, root)
      Coprl::Presenters::App.load(dir, root)
    end

    def reset_presenters!
      Coprl::Presenters::App.reset!
    end
  end
end
