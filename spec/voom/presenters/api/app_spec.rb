require 'spec_helper'
require 'voom/presenters/api/app'
require 'rack/test'

describe Voom::Presenters::Api::App do
  include Rack::Test::Methods
  
  before do
    load_presenters('.', app_dir)
  end

  after do
    reset_presenters!
  end

  let(:app) {described_class.new}

  describe 'all presenters' do
    it "render" do
      keys = Voom::Presenters::App.keys
      keys.each do |key|
        response = get "#{key.gsub(':','/')}.pom"
        puts response.body unless response.status==200
        puts key
        expect(response.status).to eq 200
      end
    end
  end
end
