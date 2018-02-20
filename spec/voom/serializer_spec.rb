require 'spec_helper'
require_relative 'test_router'

describe 'to_hash' do
  before do
    load_presenters('presenters', spec_dir)
  end

  let(:router){TestRouter.new}


  it 'exists' do
    Voom::Presenters.list.each do |key|
      puts key
      presenter = Voom::Presenters[key].call
      pom = presenter.render(router: router)
      expect(pom.to_hash).not_to eq nil
    end
  end
end
