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

  describe 'all pages' do

    it "render" do
      keys = Voom::Presenters.keys
      keys.each do |key|
        response = get "/#{key}"
        puts key
        puts response.body unless response.status==200
        puts key
        expect(response.status).to eq 200
      end
    end

  end

  describe '/' do

    let(:response){get "/"}
    it 'renders' do
      expect(response.status).to eq 200
    end

    it "content" do
      expect(response.body).to have_tag(:div, :text => "Home")
    end
  end

end
