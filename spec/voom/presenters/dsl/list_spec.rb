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

    let(:pom) {Voom::Presenters['list'].call.render(router: nil, context: {})}
    let(:list) {pom.components.first}

    describe 'line' do
      let(:line) {list.lines.first}

      describe 'action' do
        let(:action) {line.actions.first}

        it 'text' do
          expect(action.text).to eq('do it')
        end
      end

      it 'subtitle' do
        expect(line.subtitle.text).to eq('subtitle 9000')
      end

      it 'detail' do
        expect(line.detail.text).to eq('detail 8000')
      end
    end
  end
end
