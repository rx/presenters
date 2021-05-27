require 'spec_helper'
require 'ostruct'

describe 'dsl' do
  describe 'button' do
    before do
      load_presenters('presenters', spec_dir)
    end

    after do
      reset_presenters!
    end

    let(:pom) {Coprl::Presenters::App['button'].call.expand(router: nil, context: {})}
    let(:button) {pom.components.first}

    it 'text' do
      expect(button.text).to eq('do it')
    end
  end
end
