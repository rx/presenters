require 'spec_helper'
require 'ostruct'
require 'coprl/presenters/web_client/router'

describe 'reference' do
  describe 'attributes' do
    before do
      load_presenters('.', app_dir)
    end

    after do
      reset_presenters!
    end

    let(:router) {Coprl::Presenters::WebClient::Router.new(base_url: '/')}
    let(:params) {{}}

    it 'empty' do
      keys = Coprl::Presenters::App.keys
      keys.each do |pkey|
        presenter = Coprl::Presenters::App[pkey].call
        pom = presenter.expand(router: router, context: params)

        def recurse(parent, myHash, presenter)
          myHash.each {|key, value|
            if value.is_a?(Hash)
              recurse(key, value, presenter)
            elsif key==:attributes
              puts "'#{presenter}.pom emitted unconsumed attributes'\nCheck: http://localhost:9393/pom/#{presenter}" if value.any?
              expect(value).to eq([])
            elsif value.is_a?(Array)
              value.each do |aval|
                recurse(key, aval, presenter) if aval.is_a?(Array) || aval.is_a?(Hash)
              end
            end
          }
        end

        recurse(nil, pom.to_hash, pkey)
        # expect(attribs).to eq([])
      end
    end
  end
end
