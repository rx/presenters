require 'spec_helper'
require_relative 'test_router'

describe Coprl::Serializer do
  describe 'to_hash' do
    before do
      load_presenters('presenters', spec_dir)
    end

    let(:router) {TestRouter.new}


    it 'exists' do
      Coprl::Presenters::App.list.each do |key|
        puts key
        presenter = Coprl::Presenters::App[key].call
        pom = presenter.expand(router: router)
        expect(pom.to_hash).not_to eq nil
      end
    end

    it 'serializes nested hashes' do
      base = Coprl::Presenters::DSL::Components::Base.new(type: :me, parent: nil)
      expect(base.to_hash[:attributes]).to eq({})
    end
  end
end
