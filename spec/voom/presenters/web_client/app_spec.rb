require 'spec_helper'
require 'rack/test'
require 'voom/presenters/web_client/app'

describe Voom::Presenters::WebClient::App do
  include Rack::Test::Methods

  require 'tmpdir'
  def write_file(contents, basename)
    filename = File.join(Dir.tmpdir, basename)
    File.open(filename, 'w') { |file| file.write(contents) }
    filename
  end

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
          unless response.status==200
            get = write_file(response.body, 'response_get.html')
            puts "#{key}: #{get}"
          end
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
        expect(response.body).to have_tag(:span, :text => /Presenters Demo/)
      end
    end
  end

  describe 'POST' do
    describe 'all pages' do
      before do
        @ids = {}
        Voom::Presenters::Settings.configure do |config|
          config.presenters.web_client.prepare_context =[]
          config.presenters.id_generator = ->(node) {
            id = @ids[node.type]||0
            @ids[node.type] = id + 1
            "id-#{id}"
          }
        end
      end
      
      it "render from pom" do
        keys = Voom::Presenters::App.keys
        keys.each do |key|
          @ids.clear
          presenter = Voom::Presenters::App[key].call
          pom = presenter.expand(router: Voom::Presenters::WebClient::Router.new(base_url: ""), context: {'testing'=>true})

          pom_json = JSON.dump(pom.to_hash)
          @ids.clear
          response_pom = post("__post__/#{key}", pom_json, {"CONTENT_TYPE" => "application/json"})
          pom = write_file(response_pom.body, 'response_pom.html')
          expect(response_pom.status).to eq(200),pom

          @ids.clear
          response_get = get "/#{key}", 'testing'=>true
          get = write_file(response_get.body, 'response_get.html')
          expect(response_get.status).to eq(200),get
          puts key


          expect(response_pom.body).to eq(response_get.body), "#{key}: #{pom}\n#{get}"
        end
      end

    end
  end

end
