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
    context = prepare_context(params)
    router = Coprl::Presenters::WebClient::Router.new(base_url: request.base_url)
    @pom = presenter.expand(router: router, context: context)
  end

  def set_view_path
    paths = Coprl::Presenters::WebClient::PluginViewsPath.new(pom: load_pom).render
    paths.each do |path|
      prepend_view_path path
    end
  end

  def prepare_context(base_params = params)
    prepare_context = Coprl::Presenters::Settings.config.presenters.web_client.prepare_context.dup
    prepare_context.push(method(:scrub_context))
    context = base_params.dup.to_unsafe_hash
    prepare_context.reduce(context) do |params, context_proc|
      context = context_proc.call(params, session, request.env)
    end
    context
  end

  def scrub_context(params, _session, _env)
    %i(grid_nesting input_tag).each do |key|
      params.delete(key) {params.delete(key.to_s)}
    end
    params
  end
end
