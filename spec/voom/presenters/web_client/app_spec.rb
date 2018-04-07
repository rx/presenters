require 'spec_helper'
require 'voom/presenters/web_client/app'
require 'rack/test'

describe Voom::Presenters::WebClient::App do
  include Rack::Test::Methods


  before do
    load_presenters('.', app_dir)
  end

  after do
    reset_presenters!
  end

  let(:app) {described_class.new}

  describe 'GET' do
    describe 'all pages' do

      it "render" do
        keys = Voom::Presenters::App.keys
        keys.each do |key|
          response = get "/#{key}"
          puts response.body unless response.status==200
          puts key
          expect(response.status).to eq 200
        end
      end

    end

    describe '/' do
      let(:response) {get "/"}
      it 'renders' do
        expect(response.status).to eq 200
      end

      it "content" do
        expect(response.body).to have_tag(:div, :text => "Presenters")
      end
    end
  end

  describe 'POST' do
    describe 'all pages' do
      before do
        Voom::Presenters::Settings.configure do |config|
          config.presenters.web_client.prepare_context =[]
        end
      end
      it "render from pom" do
        keys = Voom::Presenters::App.keys
        keys.each do |key|
          presenter = Voom::Presenters::App[key].call
          pom = presenter.expand(router: Voom::Presenters::WebClient::Router.new(base_url: "http://example.org"))
          pom_json = JSON.dump(pom.to_hash)

          response_pom = post("__post__/#{key}", pom_json, {"CONTENT_TYPE" => "application/json"})
          expect(response_pom.status).to eq 200
          response_get = get "/#{key}"
          expect(response_get.status).to eq 200
          puts key
          expect(response_pom.body).to eq(response_get.body)
        end
      end

    end
  end

end
