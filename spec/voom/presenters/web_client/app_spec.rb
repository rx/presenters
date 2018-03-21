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
         it "render" do
           keys = Voom::Presenters::App.keys
           keys.each do |key|
             presenter = Voom::Presenters::App[key].call
             pom = presenter.expand(router: Voom::Presenters::WebClient::Router.new)
             pom_json = JSON.dump(pom.to_hash)
             
             response = post("__post__/#{key}", pom_json,  { "CONTENT_TYPE" => "application/json" })
             puts response.body unless response.status==200
             puts key
             expect(response.status).to eq 200
           end
         end

       end
  end

end
