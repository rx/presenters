require 'spec_helper'
require 'ostruct'

describe 'dsl' do
  describe 'layout' do
    before do
      load_presenters('presenters', spec_dir)
    end

    after do
      reset_presenters!
    end

    let(:pom) {Voom::Presenters['layouts.default'].call.render(router: nil, context: {})}

    it 'left' do
      expect(pom._layout_.side_nav.menu.items.first.text).to eq('Left')
    end

    it 'right' do
      expect(pom._layout_.right_nav.menu.items.first.text).to eq('Right')
    end
    it 'top' do
      expect(pom._layout_.header.menu.items.first.text).to eq('Top')
    end
  end
end
