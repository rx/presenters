class CoprlController < ApplicationController

  def show
    render :show, layout: 'coprl'
  end
  private
  def load_pom
    presenter_name = namespaced_presenter(params)
    presenter = Coprl::Presenters::App[presenter_name].call
    context = params.dup
    router = Coprl::Presenters::WebClient::Router.new(base_url: request.base_url)
    @pom = presenter.expand(router: router, context: context)
  end
end
