require 'spec_helper'
require_relative 'test_router'

describe Voom::Serializer do
  describe 'to_h' do
    before do
      load_presenters('presenters', spec_dir)
    end

    let(:router) {TestRouter.new}


    it 'exists' do
      Voom::Presenters::App.list.each do |key|
        puts key
        presenter = Voom::Presenters::App[key].call
        pom = presenter.expand(router: router)
        expect(pom.to_h).not_to eq nil
      end
    end

    it 'serializes nested hashes' do
      base = Voom::Presenters::DSL::Components::Base.new(type: :me, parent: nil)
      expect(base.to_h[:attributes]).to eq({})
    end
  end
end
