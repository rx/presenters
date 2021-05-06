module Voom::Presenters::WebClient::Helpers::Rails
  module Namespaced
    def namespaced_presenter(params)
      scoped_presenter = []
      scoped_presenter << params.fetch(:namespace1,nil)
      scoped_presenter << params.fetch(:namespace2,nil)
      scoped_presenter << params.fetch(:presenter,nil)
      scoped_presenter.compact!
      scoped_presenter.any? ? scoped_presenter.join(':') : nil
    end
  end
end
