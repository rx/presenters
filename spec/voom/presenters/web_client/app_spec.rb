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
end
