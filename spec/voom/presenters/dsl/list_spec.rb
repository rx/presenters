require 'spec_helper'
require 'ostruct'

describe 'dsl' do
  describe 'list' do
    before do
      load_presenters('presenters', spec_dir)
    end

    after do
      reset_presenters!
    end

    let(:pom) {Voom::Presenters::App['list'].call.expand(router: nil)}
    let(:list) {pom.components.first}

    describe 'line' do
      let(:line) {list.lines.first}

      describe 'action' do
        let(:action) {line.actions.first}

        it 'text' do
          expect(action.menu.items.first.text).to eq('item1')
        end
      end

      it 'subtitle' do
        expect(line.subtitle.text).to eq('subtitle 9000')
      end

      it 'body' do
        expect(line.body.text).to eq('body 8000')
      end

      it 'info' do
        expect(line.info.text).to eq('info 7000')
      end
    end
  end
end
