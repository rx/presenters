class CoprlController < ApplicationController
  include Coprl::Presenters::WebClient::Helpers::Rails::Namespaced
  before_action :set_view_path

  def show
    render :show, layout: 'coprl'
  end
  private
  def load_pom
    return @pom if @pom
    presenter_name = namespaced_presenter(params)
    fq_presenter_name = [presenter_name, 'index'].compact.join(':')
    presenter_name = fq_presenter_name if Coprl::Presenters::App.registered?(fq_presenter_name)
    presenter = Coprl::Presenters::App[presenter_name].call
    context = params.dup.to_unsafe_hash
    router = Coprl::Presenters::WebClient::Router.new(base_url: request.base_url)
    @pom = presenter.expand(router: router, context: context)
  end

  def set_view_path
    paths = Coprl::Presenters::WebClient::PluginViewsPath.new(pom: load_pom).render
    paths.each do |path|
      prepend_view_path path
    end
  end
end
