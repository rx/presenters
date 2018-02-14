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

    let(:pom) {Voom::Presenters['menu'].call.render(router: nil, context: {})}
    let(:menu) {pom.components.first}

    describe 'items' do
      let(:item1) {menu.items.first}
      let(:item2) {menu.items.last}
      let(:seperator) {menu.items[1]}

      it 'text' do
        expect(item1.text).to eq('item1')
        expect(item2.text).to eq('item2')
      end
      it 'separator' do
        expect(seperator).to_not eq(nil)
      end
    end

  end
end
