require 'spec_helper'
require 'ostruct'

describe 'dsl' do
  describe 'menu' do
    before do
      load_presenters('presenters', spec_dir)
    end

    after do
      reset_presenters!
    end

    let(:pom) {Coprl::Presenters::App['menu'].call.expand(router: nil)}
    let(:menu) {pom.components.first}

    describe 'items' do
      let(:item1) {menu.items.first}
      let(:item2) {menu.items.last}
      let(:separator) {menu.items[1]}

      it 'text' do
        expect(item1.text).to eq('home')
        expect(item2.text).to eq('item2')
      end
      it 'separator' do
        expect(separator).to_not eq(nil)
      end
    end

  end
end
