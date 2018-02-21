require 'spec_helper'

describe 'dsl' do
  describe 'form' do
    before do
      load_presenters('presenters', spec_dir)
    end

    after do
      reset_presenters!
    end

    let(:pom) {Voom::Presenters[:form1].call.expand(router: nil)}
    let(:form) {pom.components.first}
    describe 'type' do
      it 'text' do
        expect(form.fields[0].type).to eq(:text_field)
      end
      it 'hidden' do
        expect(form.fields[1].type).to eq(:hidden)
      end
      it 'button' do
        expect(form.actions.first.type).to eq(:button)
      end
    end
  end
end
